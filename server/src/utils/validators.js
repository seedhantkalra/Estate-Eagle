const { body, validationResult } = require('express-validator');

const validateProperty = [
  body('address').isString().notEmpty().withMessage('Address is required'),
  body('city').isString().notEmpty().withMessage('City is required'),
  body('province').isString().notEmpty().withMessage('State is required'),
  body('country').isString().notEmpty().withMessage('Country is required'),
  body('zip').isString().notEmpty().withMessage('ZIP code is required'),
  body('bathrooms').isInteger().notEmpty().withMessage('ZIP code is required'),
  body('bedrooms').isInteger().notEmpty().withMessage('ZIP code is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateProperty,
  validateUser,
  validateAlert,
};
