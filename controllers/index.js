'use strict'

const Commerce = require('../models/commerce')

module.exports = (router) => {
  router.get('/', findSearch)
}

function findSearch(req, res) {
  // TODO implement
  res.status(500).send()
}
