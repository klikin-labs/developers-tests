import http             from 'http'
import express          from 'express'
import kraken           from 'kraken-js'
import {createTerminus} from '@godaddy/terminus'
import config           from './lib/config'

const app     = express()
const server  = http.createServer(app)
const port    = process.env.PORT || 8080

app.use(kraken(config.start(server)))
app.on('start', () => {
  console.info('Environment: %s', app.kraken.get('env:env'))
  console.info('Server listening on http://localhost:%d', port)
  console.info('Application ready to serve requests')
})
app.on('error', (err) => {
  console.error('Express app: %s', err.message)
  process.emit('APPERROR')
})
server.on('close', () => {
  console.info('Server closed')
})

function onSignal() {
  console.info('Shutting down...')
  return config.stop()
}

function onShutdown() {
  console.info('Will exit now!')
}

createTerminus(server, {
  signals: ['SIGINT', 'APPERROR'],
  onSignal,
  onShutdown,
  logger: console.error,
})

server.listen(port)

export {app, server}
