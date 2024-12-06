'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Statuses', [
      { status_id: 1, status_name: 'Active' },
      { status_id: 2, status_name: 'Inactive' },
      { status_id: 3, status_name: 'Under Repair' },
      { status_id: 4, status_name: 'Pending' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Statuses', null, {});
  }
};
