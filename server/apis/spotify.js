require('dotenv').config()
const fetch = require('node-fetch')

async function getSpotifyToken(body){

    const fetchToken = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'post',
        headers: {
            'Authorization': 'Basic ' + (new Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
        },
        body: body,
        'Content-Type':'application/x-www-form-urlencoded'
    })

    const spotifyToken = await fetchToken.json()

    console.log(spotifyToken)

    return spotifyToken

}

async function getSpotifyUserInfo(authOptions){

    const fetchUserInfo = await fetch(`https://api.spotify.com/v1/me`, authOptions)

    const spotifyUserInfo = await fetchUserInfo.json()

    console.log(spotifyUserInfo)

    return spotifyUserInfo
}

async function getRecommendations(url, authOptions){

    const fetchRecommendations = await fetch(url)

    const recommendedTracks = await fetchRecommendations.json()



}


module.exports = {getSpotifyToken, getSpotifyUserInfo}