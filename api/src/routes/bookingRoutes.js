// server/routes/bookingRoutes.js
const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/bookingController');

// Define booking routes
router.get('/', bookingController.getAllBookings);
router.post('/', bookingController.createBooking);
// Add more routes as needed

module.exports = router;
