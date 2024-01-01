// server/controllers/carController.js
const Car = require('../models/Car');

const carController = {
  getAllCars: async (req, res) => {
    try {
      const cars = await Car.find();
      res.json(cars);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  createCar: async (req, res) => {
    try {
      const newCar = new Car(req.body);
      await newCar.save();
      res.status(201).json(newCar);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  // Add more controller methods as needed
};

module.exports = carController;
