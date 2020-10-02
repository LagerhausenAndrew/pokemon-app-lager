const Player = require('../models').Player;
const Team = require('../models').Team;
const Pokemon = require('../models').Pokemon;
const PlayerPokemon = require('../models').PlayerPokemon;aut
//no change
const homePage = (req, res) => {
    res.render('players/homepage.ejs')
}
//no change
const renderSignUp = (req, res) => {
    res.render('players/signUp.ejs')
}
//done
const createPlayer = (req, res) => {
    Player.create(req.body)
    .then(newPlayer => {
        res.redirect(`profile/${newPlayer.id}`)
    })
}
//done
const profilePage = (req, res) => {
    Player.findByPk(req.params.index, {
        include: [
            Team,
            {
                model: Pokemon,
                attributes: ['id', 'name']
            }
        ]
    })
    .then(player => {
        Team.findAll()
        .then(teams => {
            Pokemon.findAll()
            .then(allPokemon => {
                res.render('players/profile.ejs', {
                    player: player,
                    teams: teams,
                    pokemon: allPokemon
            })
            })
        })
    })
}
//no change
const renderLogIn = (req, res) => {
    res.render('players/logIn.ejs')
}
//doneish
const checkUser = (req, res) => {
    Player.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.redirect(`profile/${foundUser.id}`);
    })
}
//done
const updatePlayer = (req, res) => {
    Player.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updatedPlayer => {
        Player.findByPk(req.params.index)
        .then(foundPlayer => {
            Pokemon.findByPk(req.body.pokemonId)
            .then(foundPokemon => {
                foundPokemon.addPlayer(foundPlayer)
                res.redirect(`/players/profile/${req.params.index}`)
            })
        })
    })
}

//done
const deletePlayer = (req, res) => {
    Player.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/players');
    })
}

const removePlayerPokemon = (req, res) => {
    PlayerPokemon.destroy({
        where: 
        [
            {playerId: req.params.playerId,
            pokemonId: req.params.pokemonId}
        ]
    })
    res.redirect(`/players/profile/${req.params.playerId}`)
}

module.exports = {
    homePage,
    renderSignUp,
    createPlayer,
    profilePage,
    renderLogIn,
    checkUser,
    updatePlayer,
    deletePlayer,
    removePlayerPokemon
}