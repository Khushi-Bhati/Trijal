const mongoose = require('mongoose');

const InnovationSchema = new mongoose.Schema({
  title: { type: String, required: true },      // Pill label
  heading: { type: String, required: true },    // Card heading
  body: { type: String, required: true },       // Card body/description
  image: { type: String, required: true },      // Image url
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Innovation', InnovationSchema);
