const mongoose = require('../db/connection')

const CharacterSchema = new mongoose.Schema({
    name: {type: String},
    img: {type: String}
})

const Character = mongoose.model('Character', CharacterSchema)

module.exports = Character 