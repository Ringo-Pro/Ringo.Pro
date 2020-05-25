# Ringo.Pro

<!-- <% results.map(item => { %>
      <div class="grid-item"><p>Cover art</p></div>
      <div class="grid-item"><p><%= item.title %></p></div>
      <div class="grid-item"><p><%= item.artist %></p></div>
      <div class="grid-item"><p>Lyrics</p></div>
      <% });%> <% } %> -->
<!-- ![Screenshot van de applicatie]() -->

## APIs tested in this branch

- Tivo / AllMusic.com needs a full company name to register for the api
- Echo Nest can't find this one
- Genius
- musixmatch

https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/XRay.html

## Introduction

Here comes a small introduction.

## Usage

```zsh
git clone https://github.com/CountNick/Ringo.Pro.git
cd Ringo.Pro
```

## Table of contents

- [APIs](#apis)
- [Whishlist](#Whishlist)
- [Credits](#Credits)
- [Sources](#Sources)

## APIs

### Spotify API

### Genius API

- Request a client ID and Secret key on [#](#);
  Authenticate

```js
`https://api.genius.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}&response_type=code`;
```

<details><summary>Request Acces Token</summary>

```js
async function getAccesToken(code) {
  const url = 'https://api.genius.com/oauth/token',
    bodyData = {
      code: code,
      client_id: client_id,
      client_secret: secret,
      redirect_uri: redirect_uri,
      response_type: 'code',
      grant_type: 'authorization_code',
    };
  const response = await fetch(url, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
  });
  const jsonData = await response.json();
  console.log(jsonData);
  access_token = jsonData.access_token;
}
```

</details>

<details><summary>Data</summary>

```js
{
    highlights: [],
    index: 'song',
    type: 'song',
    result: {
      annotation_count: 7,
      api_path: '/songs/2288547',
      full_title: 'Manon by De Jeugd van Tegenwoordig',
      header_image_thumbnail_url: 'https://images.rapgenius.com/631233c9655a46e40e7a671fba27460c.300x170x1.jpg',
      header_image_url: 'https://images.rapgenius.com/631233c9655a46e40e7a671fba27460c.599x339x1.jpg',
      id: 2288547,
      lyrics_owner_id: 255445,
      lyrics_state: 'complete',
      path: '/De-jeugd-van-tegenwoordig-manon-lyrics',
      pyongs_count: 8,
      song_art_image_thumbnail_url: 'https://images.genius.com/a5f3dea785513a06e01a7753a2d6d59d.300x300x1.jpg',
      song_art_image_url: 'https://images.genius.com/a5f3dea785513a06e01a7753a2d6d59d.605x605x1.jpg',
      stats: { unreviewed_annotations: 1, hot: false, pageviews: 79651 },
      title: 'Manon',
      title_with_featured: 'Manon',
      url: 'https://genius.com/De-jeugd-van-tegenwoordig-manon-lyrics',
      primary_artist: {
        api_path: '/artists/18140',
        header_image_url: 'https://images.genius.com/f3c5b09c410385f4f19e52ee4b45baf3.1000x563x1.jpg',
        id: 18140,
        image_url: 'https://images.genius.com/51834e10506e8f674014396f8b46a114.500x500x1.jpg',
        is_meme_verified: false,
        is_verified: false,
        name: 'De Jeugd van Tegenwoordig',
        url: 'https://genius.com/artists/De-jeugd-van-tegenwoordig'
      }
```

</details>

### Musixmatch

[musixmatch](https://developer.musixmatch.com/)

Free plan

#### Restrictions

- limited to 2000 daily API Calls
- access to 30% of lyrics per song
- **Free testing plan for evaluation only**

[api terms](https://about.musixmatch.com/apiterms)

- [ ] Add restrictions
- [ ] Add access mode (like key/oAUTH etc.)
- [ ] Add description

## Whishlist

## Credits

- Jo
- Marcel
- [CSS Reset by Meyerweb](http://meyerweb.com/eric/tools/css/reset/)

## Sources

📖 Artikel / Documentation **|** ⚙️ Code **|** 📹 Video **|** 🛠 Tools

- 📖 [Genius API Documentation](https://docs.genius.com/)
- 🛠 [RegEx Tool](https://regexr.com/)
