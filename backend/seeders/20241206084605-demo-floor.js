'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Floors', [
      { floor_id: 1, floor_name: '1st Floor' },
      { floor_id: 2, floor_name: '2nd Floor' },
      { floor_id: 3, floor_name: '3rd Floor' },
      { floor_id: 4, floor_name: 'Basement' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Floors', null, {});
  }
};
