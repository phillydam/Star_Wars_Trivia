// set up the requirements ie express
const express = require('express')
const app = express()
const controller = require('./controllers/controller')
const methodOverride = require('method-override')
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.set('view engine', hbs)
app.use(methodOverride('_method'))
app.use(controller)

// set up the listener
app.listen(3000, () => {
    console.log('now listening on port 3000')
})