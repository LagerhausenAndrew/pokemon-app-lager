const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.pokemon.index);
router.get('/', ctrl.pokemon.returnToHome);
router.get('/new', ctrl.pokemon.newPokemon);
router.get('/:index/edit', ctrl.pokemon.editForm)
router.get('/:index', ctrl.pokemon.show);

router.post('/', ctrl.pokemon.postPokemon);

router.put('/:index', ctrl.pokemon.editPokemon);

router.delete('/:index', ctrl.pokemon.deletePokemon);

module.exports = router;