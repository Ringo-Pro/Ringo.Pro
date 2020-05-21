# Ringo.Pro

<!-- ![Screenshot van de applicatie]() -->

## APIs tested in this branch

- Tivo / AllMusic.com needs a full company name to register for the api
- Echo Nest can't find this one

https://stackoverflow.com/questions/39842013/fetch-post-with-body-data-not-working-params-empty
https://docs.genius.com/

## Introduction

Here comes a little introduction.

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

Request Acces Token

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

- [ ] Add restrictions
- [ ] Add access mode (like key/oAUTH etc.)
- [ ] Add description

## Whishlist

## Credits

## Sources

📖 Artikel / Documentation **|** ⚙️ Code **|** 📹 Video **|** 🛠 Tools

- Placeholder
