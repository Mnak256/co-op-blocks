const express = require('express')
const app = express()
const port = process.env.PORT || 8256

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send({text: 'hello world'})
})

app.listen(port)
