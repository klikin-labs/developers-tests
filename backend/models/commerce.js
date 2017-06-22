'use strict'

const mongoose = require('mongoose')


const commerceSchema = new mongoose.Schema({
  name:         { type: String },
  description:  { type: String },
  location:     { type: [Number] },
})

commerceSchema.index({ location: '2dsphere' })

commerceSchema.statics.findByLocation = function({lat, lng, distance = 1000000, limit= 100}) {
  let criteria = {
    location: {
      $nearSphere: {
        $geometry: { type: 'Point', coordinates: [lng, lat] },
        $maxDistance: distance,
      }
    }
  }

  return this.find(criteria)
    .limit(limit)
    .exec()
}

module.exports = mongoose.model('Commerce', commerceSchema)
