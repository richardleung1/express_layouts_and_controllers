const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.get('/', (req, res) => {
    res.send(['hello from faves-and-hates'])
});


app.listen(8000, () => {
    console.log('server has started!');
})