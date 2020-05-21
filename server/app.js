require('dotenv').config()
const Router = require('./routes/router.js')
const port = process.env.PORT || 4000
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app
    .use(express.static(path.join(__dirname, "static")))
    .use(bodyParser.urlencoded({ extended: true }))
    .set("views", __dirname + "/view/pages")
    .set("view engine", "ejs")
    .get('/', Router.homeRoute)

app.listen(port, () => {
    console.log(`Dev app listening on port: ${port}`)
})