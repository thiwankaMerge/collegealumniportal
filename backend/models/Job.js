const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    
    userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User',
  required: true,
},

    title: String,
    description: String,
    location: String,
    company: String,
    salary: Number,
    postedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);
