'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pokemons', [
      {
        name: "Bulbasaur",
        img: "http://img.pokemondb.net/artwork/bulbasaur.jpg",
        type: "Grass",
        strongAgainst: "Rock, Water, & Ground",
        weakAgainst: "Flying, Poinson, Bug, Steel, Fire, Grass, Dragon"
      },
      {
        name: "Ivysaur",
        img: "http://img.pokemondb.net/artwork/ivysaur.jpg",
        type: "Grass",
        strongAgainst: "Rock, Water, & Ground",
        weakAgainst: "Flying, Poinson, Bug, Steel, Fire, Grass, Dragon"
      },
      {
        name: "Venusaur",
        img: "http://img.pokemondb.net/artwork/venusaur.jpg",
        type: "Grass",
        strongAgainst: "Rock, Water, & Ground",
        weakAgainst: "Flying, Poinson, Bug, Steel, Fire, Grass, Dragon"
      },
      {
        name: "Charmander",
        img: "http://img.pokemondb.net/artwork/charmander.jpg",
        type: "Fire",
        strongAgainst: "Bug, Steel, Grass, Ice",
        weakAgainst: "Rock, Fire, Water, Dragon"
      },
      {
        name: "Charizard",
        img: "http://img.pokemondb.net/artwork/charizard.jpg",
        type: "Fire",
        strongAgainst: "Bug, Steel, Grass, Ice",
        weakAgainst: "Rock, Fire, Water, Dragon"
      },
      {
        name: "Squirtle",
        img: "http://img.pokemondb.net/artwork/squirtle.jpg",
        type: "Water",
        strongAgainst: "Ground, Rock, Fire",
        weakAgainst: "Water, Grass, Dragon"
      },
      {
        name: "Wartortle",
        img: "http://img.pokemondb.net/artwork/wartortle.jpg",
        type: "Water",
        strongAgainst: "Ground, Rock, Fire",
        weakAgainst: "Water, Grass, Dragon"
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
