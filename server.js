'use strict'

const http      = require('http')
const Promise   = require('bluebird')
const app       = require('./index')
const server    = http.createServer(app)
const database  = require('./lib/database')

server.listen(process.env.PORT || 8080)
server.on('listening', () => {
  console.log('Server listening on http://localhost:%d', server.address().port)
})


function shutdown() {
  Promise.resolve()
    .then(() => {
      console.log('Server shutdown...')
      return server.close()
    })
    .then(() => {
      console.log('Mongoose shutdown...')
      return database.shutdown()
    })
    .then(() => {
      process.exit(0)
    })
}

process.on('SIGINT' , shutdown) // ctrl-C
