import mongoose from 'mongoose'
import Promise  from 'bluebird'

mongoose.Promise = Promise

function start(mongoOptions) {
  const mongoUri  = mongoOptions.uri
  const mongoOpts = mongoOptions.options || {}

  return mongoose.connect(mongoUri, mongoOpts)
}

function stop() {
  return mongoose.connection.close()
}

export default {
  start,
  stop,
}
