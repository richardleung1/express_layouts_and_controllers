const hateController = require('express').Router()

hateController.get('/animals', (req, res) => {
    const animals = ['rats', 'snakes', 'frogs', 'spiders', 'insects'];
    res.render('hateAnimals', {animals})
})

hateController.get('/foods', (req, res) => {
    const foods = ['anchovies', 'blue cheese', 'olives', 'candy corn']
    res.render('hateFoods', {foods})
})

module.exports = hateController;