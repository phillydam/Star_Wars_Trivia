// set up the requirements for express
const express = require('express')
const router = express.Router()
const Character = require('../models/character-model')
const app = express()

//setup routes
router.get('/', (req, res) => {
    res.send('characters')
})



module.exports = router