'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Teams', [
      {
        name:'Team Rocket',
    },
    {
        name:'Team Ash',
    },
    {
        name:'Team Gary',
    }
    ],)
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
