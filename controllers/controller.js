// set up the requirements for express
const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const Character = require('../models/character-model')
const app = express()

//setup routes
router.get('/', (req, res) => {
    res.render('welcome')
})

router.get('/startgame', (req, res) => {
    res.render('startGame')
})

router.get('/character', (req, res) => {
    Character.find({})
    .then(character => {
        res.render('index', {character})
    })
})

//find characters from db
router.get('/character/:id', (req, res) => {
    Character.findById(req.params.id)
    .then(character => {
        res.render('index', {character})
    })
})

router.get('/character/:id', (req, res) => {
    Character.find({})
    .then(character => {
        res.json(character[req.params.id])
    })
})

//cycle through characters


module.exports = router