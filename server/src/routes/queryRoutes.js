const express = require('express');
const { handleQueryRequest } = require('../controllers/queryController');

const router = express.Router();

router.post('/', handleQueryRequest);

module.exports = router;
