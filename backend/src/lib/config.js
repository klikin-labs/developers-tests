import database from './database'


function start() {
  return {
    onconfig: async(config, next) => {
      await database.start(config.get('mongo'))

      next(null, config)
    }
  }
}

async function stop() {
  return database.stop()
}

export default {start, stop}
