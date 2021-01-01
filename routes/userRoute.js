const express = require('express')
const router = express.Router()
var app = express()
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/mernstackauth', { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('mongodb connection success');
    }
})

var usermodel = mongoose.model('users', { name: String, username: String, password: String })

router.post('/registeruser', function (req, res) {

    var newuser = new usermodel({ name: req.body.name, username: req.body.username, password: req.body.password })
    newuser.save(function (err) {
        if (err) {
            res.send('something is wrong')
        } else {
            res.send('user registered success')
        }
    })
})


router.post('/loginuser', function (req, res) {
    usermodel.find({
        username: req.body.username,
        password: req.body.password
    }, function (err, documents) {
        if (err) {
            res.send('something went wrong')
        } else {
            if (documents.length == 0) {
                res.send('login failed')
            } else {
                res.send('login success')
            }
        }
    })
})

router.post('/getusers', function (req, res) {
    usermodel.find({}, function (err, documents) {
        if (err) {
            res.send('something is error')
        } else {
            res.send(documents)
        }
    })
})

module.exports = router