'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Divisions', [
      { division_id: 1, division_name: 'Mechanical' },
      { division_id: 2, division_name: 'Electrical' },
      { division_id: 3, division_name: 'Plumbing' },
      { division_id: 4, division_name: 'Civil' },
      { division_id: 5, division_name: 'Electronics' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Divisions', null, {});
  }
};
