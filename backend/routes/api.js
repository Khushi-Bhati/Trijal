const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/products', siteController.getProducts);
router.get('/company/:key', siteController.getCompanyInfo);
router.get('/why-choose-us', siteController.getWhyChooseUs);
router.get('/innovation', siteController.getInnovation);
router.post('/contact', siteController.createContact);
router.get('/stats', siteController.getStats);

router.get('/industries', siteController.getIndustries);

module.exports = router;
