'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      favoritePokemon: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('Players');
  }
};