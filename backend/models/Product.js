const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  icon: { type: String, default: 'âš¡' },
  image: { type: String }, // URL to render on the homepage cards
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', ProductSchema);
