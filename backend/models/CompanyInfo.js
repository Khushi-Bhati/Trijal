const mongoose = require('mongoose');

const CompanyInfoSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  content: { type: mongoose.Schema.Types.Mixed, required: true }
});

module.exports = mongoose.model('CompanyInfo', CompanyInfoSchema);
