const express = require('express');
const userController = require('../controllers/authController');

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

router.get('/:id/alerts', userController.getAlertsByUserId);
router.post('/:id/alerts', userController.addAlertToUser);
router.delete('/:id/alerts', userController.removeAlertFromUser);

module.exports = router;