const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const geoLocationSchema = new Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

const addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
  geoLocation: geoLocationSchema,
});

const roomSchema = new Schema({
  name: { type: String, required: true },
  size: { type: Number, min: 0 },
  type: { type: String, enum: ['room', 'flat'], default: 'room' },
  price: { type: Number, required: true, min: 0 },
});

const floorSchema = new Schema({
  floorNumber: { type: Number, required: true, min: 0 },
  rooms: [roomSchema],
});

const contactInfoSchema = new Schema({
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

const homeSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  description: { type: String },
  address: addressSchema,
  size: { type: Number, required: true, min: 0 },
  images: [{ type: String }],
  amenities: [{ type: String }],
  floors: [floorSchema],
  contactInfo: contactInfoSchema,
  status: { type: String, enum: ['available', 'booked'], default: 'available' },
  idProof: { type: String, required: true },
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;