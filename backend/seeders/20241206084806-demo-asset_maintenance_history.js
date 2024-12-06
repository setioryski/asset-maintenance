'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Asset_Maintenance_History', [
      { history_id: 1, asset_id: 1, task_description: 'AC Unit filter replacement', maintenance_date: '2023-05-01', status: 'Completed', remarks: 'Filters replaced' },
      { history_id: 2, asset_id: 2, task_description: 'Panel circuit check', maintenance_date: '2023-06-20', status: 'Completed', remarks: 'No issues' },
      { history_id: 3, asset_id: 3, task_description: 'Pump motor maintenance', maintenance_date: '2023-07-10', status: 'Failed', remarks: 'Motor malfunction' },
      { history_id: 4, asset_id: 4, task_description: 'Elevator door check', maintenance_date: '2023-08-05', status: 'Completed', remarks: 'Operational' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Asset_Maintenance_History', null, {});
  }
};
