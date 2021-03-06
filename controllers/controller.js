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

// router.get('/character', (req, res) => {
//     Character.find({ name: req.params.name}, function(err, characters){
//         res.render('index', {
//             charactersArray: characters
//         })
//     })
// })

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
/* 
Make a function that alerts Correct
Make a function that alerts Wrong
Then use them in the HBS
*/
// Handlebars.registerHelper('submitAnswer', function(answer){
//     const html = '<form>'
//     answer.forEach(function(name) {
//         html +=
//     })
// })

function answerSubmit(){
    if(character.params.name = true){
        alert('Correct!')
    }else{
        alert('Wrong')
    }
}



// const submitButton = document.getElementById("submit").innerHTML;
// const handlebars = Handlebars.compile(submitButton)
// // document.body.innerHTML = submitButton

// const submitAnswer = correctAnswer () => {
//     if
// }


module.exports = router