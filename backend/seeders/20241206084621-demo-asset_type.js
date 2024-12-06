'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Asset_Types', [
      { asset_type_id: 1, asset_type_name: 'Air Conditioning' },
      { asset_type_id: 2, asset_type_name: 'Electrical Panel' },
      { asset_type_id: 3, asset_type_name: 'Plumbing Pipe' },
      { asset_type_id: 4, asset_type_name: 'Lighting' },
      { asset_type_id: 5, asset_type_name: 'Elevator' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Asset_Types', null, {});
  }
};
