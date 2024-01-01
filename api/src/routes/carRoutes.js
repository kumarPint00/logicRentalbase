// server/routes/carRoutes.js
const express = require('express');
const router = express.Router();

const carController = require('../controllers/carController');

// Define car routes
router.get('/', carController.getAllCars);
router.post('/', carController.createCar);
// Add more routes as needed

module.exports = router;
