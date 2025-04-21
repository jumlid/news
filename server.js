const express = require('express')
const e = express()
const cors = require('cors')
let apikey = "key"
e.use(cors())
e.get('/server', (req, res) => {
    fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=${apikey}`)
        .then(res => res.json())
        .then(data => {


            res.send({ "data": data })
        })
})
e.listen(8000, () => {
    console.log('start')
})
