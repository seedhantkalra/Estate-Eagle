const express = require('express');
const propertyController = require('../controllers/propertyController');

const router = express.Router();

router.get('/', propertyController.getProperties);
router.get('/:address', propertyController.getPropertyByAddress);
router.post('/', propertyController.createProperty);
router.put('/:address', propertyController.updateProperty);
router.delete('/:address', propertyController.deleteProperty);

module.exports = router;