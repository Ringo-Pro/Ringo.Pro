# Ringo.Pro

<!-- ![Screenshot van de applicatie]() -->

## Introduction

Ringo Pro is a application for music supervisors. It makes looking for tracks and searching for licenses easier.

## Usage

### 1. Clone the repo and install dependencies

```zsh
git clone https://github.com/Ringo-Pro/Ringo.Pro.git
cd Ringo.Pro
npm install
```

### 2. Make an .env file

To make the application work you will need to make a `.env` file in the root folder. Here you must add:

- Client ID from Spotify
- Client Secret from Spotify
- Redirect URI (for Spotify)

```
SPOTIFY_CLIENT_ID=<YOUR_CLIENT_ID>
SPOTIFY_CLIENT_SECRET=<YOUR CLIENT SECRET>
REDIRECT_URI=<YOUR_REDIRECT_URI>

```

### 3. Run the app

```zsh
npm start
```

## Table of contents

- [NPM Scripts](#npm-scripts)
- [Dependencies](#dependencies)
- [API](#api)
- [Credits](#Credits)
- [Wishlist](#Whishlist)
- [Sources](#Sources)

## NPM Scripts

- `npm run prestart` = Build CSS before starting
- `npm run start` = Start the app
- `npm run dev` = Start the app with Nodemon
- `npm run start:dev` = Start the app in development mode (watch + dev)
- `npm run build:css` = Build CSS
- `npm run build:js` = Build ES
- `npm run build:img` = Build IMG
- `npm run build` = Build CSS + ES + IMG
- `npm run watch` = Watch CSS + ES Files

## Dependencies

- [NodeJS](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express)
  - [Body Parser](https://www.npmjs.com/package/body-parser)
  - [Cookie Parser](https://www.npmjs.com/package/cookie-parser)
- [Cors](https://www.npmjs.com/package/cors)
- [DotENV](https://www.npmjs.com/package/dotenv)
- [EJS](https://www.npmjs.com/package/ejs)
- [Gulp](https://www.npmjs.com/package/gulp)
  - [Gulp Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
  - [Gulp Clean CSS](https://www.npmjs.com/package/gulp-clean-css)
  - [Gulp Concat](https://www.npmjs.com/package/gulp-concat)
  - [Gulp Imagemin](npmjs.com/package/gulp-imagemin)
  - [Gulp Terser](https://www.npmjs.com/package/gulp-terser)
- [Node Fetch](https://www.npmjs.com/package/node-fetch)
- [Query String](https://www.npmjs.com/package/query-string)
- [Url](https://www.npmjs.com/package/url)
- [Nodemon](npmjs.com/package/nodemon)

## API

### Spotify API

[Documentation](https://developer.spotify.com/documentation/web-api/)

### Authentication

- [ ] key
- [ ] oAuth

### Data

<details><summary>Data returned</summary>

```js
here comes data
```

</details>

## Credits

- Jo Sandow for supporting us during this project.
- Marcel Alexander Wiebenga for thinking of this project.
- [CSS Reset by Meyerweb](http://meyerweb.com/eric/tools/css/reset/) for their CSS reset
- [Danrovito - Country dropdown](https://gist.github.com/danrovito/977bcb97c9c2dfd3398a) for saving us a lot of time.
- [Peter-Paul Koch - checking input types with JS](https://quirksmode.org/html5/inputs/tests/inputs_js.html) for his code to check if a browser supports an input type.
- [Thomas Loven](https://github.com/thomasloven/round-slider) for making round sliders.

## Wishlist

- [ ] Cool visual graphs

## Sources

📖 Artikel / Documentation **|** ⚙️ Code **|** 📹 Video **|** 🛠 Tools

- 📖 [Spotify API Documentation](https://developer.spotify.com/documentation/web-api/)
- 🛠 [RegEx Tool](https://regexr.com/)
