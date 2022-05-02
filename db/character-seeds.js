const Character = require('../models/character-model')
const seedData = require('./character-seeds.json')

Character.deleteMany({})
    .then(() => {
        //inserts data then returns it to log into the ".then"
        return Character.insertMany(seedData)
        //if insert was successful, we'll see the results in the terminal
        .then(console.log)
        //if unsuccesful, logs the error
        .catch(console.error)
        //closes connection to database
        .finally(() => {
            process.exit()
        })
    })