'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pokemons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      img: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      strongAgainst: {
        type: Sequelize.STRING
      },
      weakAgainst: {
        type: Sequelize.STRING
      },
      createdAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
          defaultValue: new Date(),
          allowNull: false,
          type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pokemons');
  }
};