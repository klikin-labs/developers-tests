import mongoose from 'mongoose'


const commerceSchema = new mongoose.Schema({
  name:         { type: String },
  description:  { type: String },
  location:     { type: [Number] },
})


// eslint-disable-next-line no-unused-vars
commerceSchema.statics.findByLocation = function({lat, lng, distance = 100000, limit= 100}) {
  // TODO implement
}

export default mongoose.model('Commerce', commerceSchema)
