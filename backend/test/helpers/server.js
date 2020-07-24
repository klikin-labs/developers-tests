import path     from 'path'
import http     from 'http'
import Promise  from 'bluebird'
import express  from 'express'
import kraken   from 'kraken-js'
import config   from '../../src/lib/config'


async function start() {
  const app     = express()
  const server  = http.createServer(app)

  app.use(kraken({
    basedir: path.join(__dirname, '..', '..', 'src'),
    onconfig: config.start(server).onconfig,
  }))

  const running = Promise.fromCallback(done => app.on('start', done))
  global.APP    = server.listen(1337)

  await running
}

async function stop() {
  await Promise.fromCallback((done) => global.APP.close(done))
  await config.stop()
  global.APP = null
}

export default {start, stop}
