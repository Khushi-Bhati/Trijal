const mongoose = require('mongoose');

const StatSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  suffix: { type: String, default: '+' },
  label: { type: String, required: true },
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Stat', StatSchema);
