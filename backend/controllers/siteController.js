const Product = require('../models/Product');
const CompanyInfo = require('../models/CompanyInfo');
const WhyChooseUs = require('../models/WhyChooseUs');
const Innovation = require('../models/Innovation');
const Contact = require('../models/Contact');
const Stat = require('../models/Stat');
const CareerRole = require('../models/CareerRole');
const Industry = require('../models/Industry');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort('order');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCompanyInfo = async (req, res) => {
  try {
    const info = await CompanyInfo.findOne({ key: req.params.key });
    if (!info) return res.status(404).json({ message: 'Not found' });
    res.json(info);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getWhyChooseUs = async (req, res) => {
  try {
    const items = await WhyChooseUs.find().sort('order');
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getInnovation = async (_req, res) => {
  try {
    const items = await Innovation.find().sort('order');
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getStats = async (_req, res) => {
  try {
    const stats = await Stat.find().sort('order');
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.getIndustries = async (_req, res) => {
  try {
    const industries = await Industry.find().sort('order');
    res.json(industries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
