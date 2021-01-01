const express = require('express')

var app = express()

const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const userRoute = require('./routes/userRoute')

app.use('/api/user', userRoute)

app.get('/', function (req, res) {
    res.send('this is backend apps')
})

app.listen(4000, () => {
    console.log('server started on port 4000');
})