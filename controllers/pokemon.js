const Pokemon = require('../models').Pokemon;
const Player = require('../models').Player;
//done
const index = (req, res) => {
    Pokemon.findAll({
        order: [
            ['id']
        ]
    })
    .then(pokemon => {
        res.render('index.ejs', {
            pokemon: pokemon
        });
    })
};
//no change
const newPokemon = (req, res) => {
    res.render('new.ejs')
}
//done
const show = (req, res) => {
    Pokemon.findByPk(req.params.index, {   
        include: [
        {
            model: Player,
            attributes: ['name']
        }
    ]}
    )
    .then(pokemon => {
        res.render('show.ejs', {
            pokemon: pokemon
          })
    })
}
//done
const editForm = (req, res) => {
    Pokemon.findByPk(req.params.index)
    .then(pokemon => {
        res.render('edit.ejs', {
            pokemon: pokemon
        })
    })
}
//done
const postPokemon = (req, res) => {
    Pokemon.create(req.body)
    .then(newPokemon => {
        res.redirect('/pokemon')
    })
}
//done
const editPokemon = (req, res) => {
    Pokemon.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updatedPokemon => {
        res.redirect('/pokemon')
    })
}
//done
const deletePokemon = (req, res) => {
    Pokemon.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/pokemon');
    })
}
//no change
const returnToHome = (req, res) => {
    res.redirect('/pokemon')
}

module.exports = {
    index,
    newPokemon,
    show,
    editForm,
    postPokemon,
    editPokemon,
    deletePokemon,
    returnToHome
}