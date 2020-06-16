console.log('This is musicplayer speaking')
console.log('token: ', token)

let pauseButton = document.querySelector('.pauseButton')
let previousButton = document.querySelector('.previousButton')
let nextButton = document.querySelector('.nextButton')
let albumArt = document.querySelector('.album-art')
let nowPlaying = document.querySelector('.nowPlaying')
let trackProgression = document.querySelector('.progress')
let volume = document.querySelector('.volume')

// console.log(nowPlaying.children[0])




window.onSpotifyWebPlaybackSDKReady = () => {
    const player = new Spotify.Player({
        name: 'Ringo Pro player',
        getOAuthToken: cb => {cb(token)}
    })

      // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });

    
    player.getCurrentState().then(state => {
        if(!state){
            // nowPlaying.children[0].textContent = 'Click on a song!'
            // console.error('User is not playing music through the Web Playback SDK')
            console.log('User is not playing music through the Web Playback SDK')
            fetch('https://api.spotify.com/v1/me/player', {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }})
                .then(res => res.json())
                .then(body => {
                    console.log(body)
                    nowPlaying.children[0].textContent = body.item.name
                    nowPlaying.children[1].textContent = body.item.artists[0].name
                
                    albumArt.src = body.item.album.images[2].url
                })

            return
        }

        let {
            current_track,
            next_tracks: [next_track]
        } = state.track_window

        console.log('Currently Playing', current_track);
        console.log('Playing Next', next_track);


    })
    


let currState = {}
player.addListener('player_state_changed', state => {
  currState.paused = state.paused;
  currState.position = state.position;
  currState.duration = state.duration;
  currState.updateTime = performance.now()
  currState.current_track = state.track_window.current_track
});

// if(currState.duration) trackProgression.max = currState.duration


function getStatePosition() {
    // trackProgression.max = currState.duration
    if(currState.current_track){
    // nowPlaying.textContent = `${currState.current_track.name} - ${currState.current_track.artists[0].name}`
    
    nowPlaying.children[0].textContent = currState.current_track.name
    nowPlaying.children[1].textContent = currState.current_track.artists[0].name

    albumArt.src = currState.current_track.album.images[1].url
    }
  
    if (currState.paused === true) {
     return currState.position;
    }
trackProgression.max = currState.duration
  let position = currState.position + (performance.now() - currState.updateTime) / 1000;
  return position > currState.duration ? currState.duration : position;
}

setInterval(() => {

    if(typeof getStatePosition() !== NaN){
        // console.log(getStatePosition())
        // trackProgression.stepUp()
        trackProgression.setAttribute('value', getStatePosition().toString())
        
        if(currState.paused === false){
        trackProgression.stepUp(1000)
        }

    }
}, 1000);


    volume.addEventListener('mouseup', function(){

        player.setVolume(this.value).then(() => {
            console.log('volume updated to: ', this.value)
        })
    })
    
    pauseButton.addEventListener('click', (event) => {
        event.target.classList.toggle("paused")
        player.togglePlay().then(() => {
            
        })
    })

    previousButton.addEventListener('click', () => {
        	
        player.previousTrack().then(() => {
            console.log('Set to previous track!');
        });
    })

    nextButton.addEventListener('click', () => {
        	
        player.nextTrack().then(() => {
            console.log('Set to next track!');
        });
    })

    trackProgression.addEventListener('mouseup', function(){
        // console.log('yeet: ', this.value)
        player.seek(this.value).then(() => {
            console.log('Changed position!');
        })
    })
    
    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);



        const play = async({
            spotify_uri,
            playerInstance: {
                _options: {
                    getOAuthToken,
                    id
                }
            }
        }) => {

            getOAuthToken(access_token => {
                fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
                    method: 'PUT',
                    body: JSON.stringify({uris: [spotify_uri]}),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`
                    }
                })
            })
        }
        function start(){
            // console.log(this.id)
            trackProgression.stepDown(trackProgression.value)
            return play({
                playerInstance: player,
                spotify_uri: this.id,
            })
        }

        const observer = new MutationObserver(function(mutations) {

            mutations.forEach(function(mutation) {
              if(mutation){
                //   console.log(mutation)
                  const playButtonList = document.querySelectorAll('.playButton')
                //   console.log(playButtonList)

                  playButtonList.forEach((playButton) => {
                    // console.log(playButton)
                
                    // playButton.addEventListener('click', event => {
                    //     pauseButton.classList.add('paused')
                    //     console.log(event.target.id)
        
                    //     return play({
                    //         playerInstance: player,
                    //         spotify_uri: event.target.id,
                    //     })
                    //     // console.log(event.target.id)
                    // })
                    playButton.addEventListener('click', start)
                    // playButton.removeEventListener('click', start)

                })
              }
            })
        })
        
        const results = document.querySelectorAll('.search-results')
        const projectPage = document.querySelector('.project-page')

        console.log('aaaa', projectPage)
        
        
        console.log(results[0])
        
        observer.observe(results[0], {
            childList: true,
            attributes: true,
            characterData: true,
        
        })

        observer.observe(projectPage, {
            childList: true,
            attributes: true,
            characterData: true,
        
        })
    


    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });
    // console.log('player: ', player)
    // Connect to the player!
    player.connect();

}

