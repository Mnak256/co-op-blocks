const express = require('express')

const router = express.Router()

router.get('/', function (req, res, next) {
  res.sendFile('public/game.html', { root: __dirname })
})

module.exports = router
