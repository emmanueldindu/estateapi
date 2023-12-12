const router = require('express').Router();
const ordersController = require('../controllers/ordersController')


router.get('/:id', ordersController.getUsersOrder)

module.exports = router