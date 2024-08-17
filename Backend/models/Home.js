const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for a room
const roomSchema = new Schema({
  name: { type: String, required: true },
  size: { type: Number },
  type: { type: String },
  price: { type: Number, required: true },
});

// Define the schema for a floor
const floorSchema = new Schema({
    floorNumber: { type: Number, required: true },
    rooms: [roomSchema]
  });
  
const homeSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true }
    },
    floors: [floorSchema],
    
    description: { type: String, required: true },
    images: [String],
    amenities: [String],
    size: { type: Number },
    availability: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  
  const Home = mongoose.model('Home', homeSchema);
  module.exports = Home;
  