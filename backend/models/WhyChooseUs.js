const mongoose = require('mongoose');

const WhyChooseUsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: '💡' },
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('WhyChooseUs', WhyChooseUsSchema);