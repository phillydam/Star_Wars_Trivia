// set up the requirements for express
const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const Character = require('../models/character-model')
const app = express()
const Handlebars = require('hbs')


//setup routes
router.get('/', (req, res) => {
    res.render('welcome')
})

router.get('/startgame', (req, res) => {
    res.render('startGame')
})

router.get('/character', (req, res) => {
    Character.find({ name: req.params.name}, function(err, characters){
        res.render('index', {
            charactersArray: characters
        })
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
/* 
Make a function that alerts Correct
Make a function that alerts Wrong
Then use them in the HBS
*/

function answerSubmit(){
    if(character.params.name = true){
        window.alert('Correct!')
    }else{
        windoow.alert('Wrong')
    }
}

// const submitButton = document.querySelector('.submit')
// const handlebars = Handlebars.compile(submitButton)
// document.body.innerHTML = submitButton



module.exports = router