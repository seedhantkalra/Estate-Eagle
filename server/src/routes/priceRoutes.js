const express = require('express');
const nearController = require('../controllers/priceController');

const router = express.Router();

router.post('/price', nearController.setPrice);
router.get('/address', nearController.getHousePriceHistory);
router.get('/prices', nearController.getAllPrices)

module.exports = router;