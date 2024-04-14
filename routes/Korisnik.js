const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/users', userController.createUser);
router.post('/users/login', userController.loginUser);
router.get('/users/:id', authMiddleware, userController.getUserById);
router.patch('/users/:id', authMiddleware, userController.updateUser);
router.delete('/users/:id', authMiddleware, userController.deleteUser);

module.exports = router;