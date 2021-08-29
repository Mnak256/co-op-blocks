const express = require('express')
const lobby = require('./lobby')
const app = express()

const port = process.env.PORT || 8256

app.use(express.static('public'))

app.use('/lobby', lobby)

app.listen(port)
