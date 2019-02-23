require ('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const bodyParser = require('body-parser')

const ctrl = require('./controller')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)

    console.log('Connected')
    app.listen(SERVER_PORT, () => console.log('Sweeettt'))
})

app.get('/api/listing', ctrl.getListing)
app.post('/api/listing', ctrl.createListing)
app.delete('/api/listing/:id', ctrl.deleteListing)
app.put('/api/listing/:id', ctrl.updateListing)