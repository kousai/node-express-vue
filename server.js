const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const mongoUrl = 'mongodb://localhost:27017/project-test'

const routes = require('./server/routes')

let port = process.env.PORT || 8080

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('dist'))

routes(app)

mongoose.Promise = global.Promise

mongoose.connect(mongoUrl, function (err, db) {
  if(err) {
    console.error(err)
    return
  }
  console.log('mongodb have connected your project')
})

app.listen(port, () => {
  console.log('listening on port : ' + port)
})
