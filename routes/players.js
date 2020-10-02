const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.players.homePage);
router.get('/signUp', ctrl.players.renderSignUp);
router.get('/profile/:index', ctrl.players.profilePage);
router.get('/logIn', ctrl.players.renderLogIn);

router.post('/profile', ctrl.players.createPlayer);
router.post('/checkUser', ctrl.players.checkUser);

router.put('/profile/:index', ctrl.players.updatePlayer)

router.delete('/profile/:index', ctrl.players.deletePlayer)
router.delete('/profile/:playerId/:pokemonId', ctrl.players.removePlayerPokemon)

module.exports = router;