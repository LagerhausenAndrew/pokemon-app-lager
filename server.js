const express = require('express');
const methodOverride = require('method-override');

// const pokemon = require('./models/pokemon');

const routes = require('./routes');

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));

app.use(express.static("public"));

app.use('/pokemon', routes.pokemon);
app.use('/players', routes.players);

app.listen(3010, () => {
    console.log('My server is up and running');
})
