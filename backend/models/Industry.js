const mongoose = require('mongoose');

const IndustrySchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true }, // URL or file path
    order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Industry', IndustrySchema);
