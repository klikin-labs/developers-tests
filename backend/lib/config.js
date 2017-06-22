'use strict'

module.exports = function() {
  return {
    onconfig: (config, next) => {
      const database = require('./database')
      let mongoOptions = config.get('mongo')
      database.bootstrap(mongoOptions)

      next(null, config)
    }
  }
}
