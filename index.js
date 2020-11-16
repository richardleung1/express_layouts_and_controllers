const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

const favController = require('./controllers/favController.js')
const hateController = require('./controllers/hateController.js')

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', (req, res) => {
    res.render('index')
});

app.use('/faves', favController);
app.use('/hates', hateController);

app.listen(8000, () => {
    console.log('server has started!');
})