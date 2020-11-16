const favController = require('express').Router()

favController.get('/animals', (req, res) => {
    const animals = ['dogs', 'cats', 'pandas', 'bears'];
    res.render('favAnimals', {animals})
})

favController.get('/foods', (req, res) => {
    const foods = ['salmon', 'lobster', 'mango', 'durian', 'banana'];
    res.render('favFoods', {foods})
})

module.exports = favController;