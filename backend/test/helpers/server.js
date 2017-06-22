'use strict'

const Promise   = require('bluebird')
const kraken    = require('kraken-js')
const express   = require('express')
const config    = require('../../lib/config')()
const database  = require('../../lib/database')

function serverStartup(done) {
  let app = express()
  app.on('start', () => {
    done()
  })
  app.use(kraken({
    basedir: process.cwd(),
    onconfig: config.onconfig
  }))

  return app.listen(1337)
}

function serverShutdown(app, done) {
  let serverClose = Promise.promisify(app.close, {context: app})

  Promise.resolve()
    .then(() => serverClose())
    .then(() => database.shutdown())
    .then(() => done())
}

exports.startup   = serverStartup
exports.shutdown  = serverShutdown
