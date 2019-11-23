const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const PORT = 3000

app.use(bodyParser.json())

const router = require('./router')

app.use('/', router)

app.listen(PORT, () => console.log('...listening on port: ' + PORT))