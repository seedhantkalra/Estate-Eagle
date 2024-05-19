const express = require('express');
const propertyController = require('../controllers/propertyController');

const router = express.Router();

router.get('/', propertyController.getProperties);
router.get('/:address', propertController.getPropertyByAddress);
router.post('/', propertyController.createProperty);
router.put('/:address', propertyController.updateProperty);
router.delete('/:address', propertController.deleteProperty);

module.exports = router;