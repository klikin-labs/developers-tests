import _ from 'lodash'

export default function(router) {

  router.get('/:commerceId/rating', getRating)

  function getRating(req, res) {
    const commerceId  = req.params.commerceId
    const rating      = _.random(0, 5)

    res.status(200).json({commerceId, rating})
  }
}
