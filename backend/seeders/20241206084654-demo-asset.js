'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Assets', [
      { asset_id: 1, asset_name: 'AC Unit 001', asset_type_id: 1, floor_id: 1, status_id: 1, division_id: 1, installation_date: '2020-05-01', last_maintenance_date: '2023-05-01' },
      { asset_id: 2, asset_name: 'Electrical Panel 01', asset_type_id: 2, floor_id: 2, status_id: 1, division_id: 2, installation_date: '2019-07-15', last_maintenance_date: '2023-06-20' },
      { asset_id: 3, asset_name: 'Water Pump 001', asset_type_id: 3, floor_id: 3, status_id: 1, division_id: 3, installation_date: '2021-01-10', last_maintenance_date: '2023-05-10' },
      { asset_id: 4, asset_name: 'Lift 002', asset_type_id: 5, floor_id: 4, status_id: 3, division_id: 4, installation_date: '2018-03-20', last_maintenance_date: '2023-03-10' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Assets', null, {});
  }
};
