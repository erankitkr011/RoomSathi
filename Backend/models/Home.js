const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: { type: String, required: true },
  size: { type: Number, min: 0 },
  type: { type: String, enum: ['room', 'flat'], required: true },
  price: { type: Number, required: true, min: 0 },
});

const floorSchema = new Schema({
  floorNumber: { type: Number, required: true, min: 0 },
  rooms: [roomSchema]
});

const homeSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: { type: String },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
    geoLocation: {
      lat: { type: Number },
      lng: { type: Number }
    }
  },
  idProof: { type: String, required: true },
  floors: [floorSchema],
  areaInAcres: { type: Number, required: true, min: 0 },
  images: [{ type: String }],
  amenities: [{ type: String }],
  status: { type: String, enum: ['available', 'Booked'], default: 'available' },
  contactInfo: {
    phone: { type: String },
    email: { type: String }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Home', homeSchema);