// const mongoose = require('mongoose');

// const eventSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     date: Date,
//     location: String,
//     createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Event', eventSchema);
// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: String,
  description: String,
  date: Date,
  location: String,
});

module.exports = mongoose.model('Event', eventSchema);
