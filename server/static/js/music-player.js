console.log('This is musicplayer speaking')
console.log('token: ', token)
console.log('uris: ', uriList)

let currentUri
console.log('current uri to be played: ', currentUri)
const playButtonList = document.querySelectorAll('.playButton')
const pauseButton = document.querySelector('.pauseButton')
const previousButton = document.querySelector('.previousButton')
const nextButton = document.querySelector('.nextButton')
const albumArt = document.querySelector('.album-art')
const nowPlaying = document.querySelector('.nowPlaying')
const trackProgression = document.querySelector('.progress')
const volume = document.querySelector('.volume')
console.log(volume.step)

console.log(nowPlaying)

// console.log(pauseButtonList)

async function getPlayer(){

    let options = {
        headers: { Authorization: 'Bearer ' + token },
        method: 'GET'
      };

    const fetchGetNowPlaying = await fetch('https://api.spotify.com/v1/me/player', options)
    const nowPlaying = await fetchGetNowPlaying.json()

    console.log('the async function boii: ', nowPlaying)

    return nowPlaying

}

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
            nowPlaying.textContent = 'Click on a song!'
            // console.error('User is not playing music through the Web Playback SDK')
            return
        }

        let {
            current_track,
            next_tracks: [next_track]
        } = state.track_window

        console.log('Currently Playing', current_track);
        console.log('Playing Next', next_track);


    })
    
    // Playback status updates
    player.addListener('player_state_changed', ({
        position,
        duration,
        track_window: {current_track}
    }) => {
        console.log('Currnetly Playing: ', current_track)
        console.log('Position in Song: ', position)
        console.log('Duration of Song: ', duration)
        nowPlaying.textContent = `${current_track.name} - ${current_track.artists[0].name}`
        albumArt.src = current_track.album.images[1].url
        

        trackProgression.max = duration
        trackProgression.value = position

    });



    volume.addEventListener('mouseup', function(){

        player.setVolume(this.value).then(() => {
            console.log('volume updated to: ', this.value)
        })
    })
    
    pauseButton.addEventListener('click', () => {

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
    
        playButtonList.forEach((playButton) => {
            // console.log(playButton)
        
            playButton.addEventListener('click', event => {

                return play({
                    playerInstance: player,
                    spotify_uri: event.target.id,
                })
                // console.log(event.target.id)
            })
        })

    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });
    console.log('player: ', player)
    // Connect to the player!
    player.connect();

}