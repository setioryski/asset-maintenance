'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Checklist_Template_Items', [
      { template_item_id: 1, template_id: 1, item_description: 'Air filters cleaned or replaced' },
      { template_item_id: 2, template_id: 1, item_description: 'Temperature control calibration' },
      { template_item_id: 3, template_id: 2, item_description: 'Electrical panel integrity check' },
      { template_item_id: 4, template_id: 2, item_description: 'Voltage checks on circuits' },
      { template_item_id: 5, template_id: 3, item_description: 'Plumbing pipe integrity check' },
      { template_item_id: 6, template_id: 3, item_description: 'Water pressure test' },
      { template_item_id: 7, template_id: 4, item_description: 'Elevator door operation check' },
      { template_item_id: 8, template_id: 4, item_description: 'Lift safety inspection' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Checklist_Template_Items', null, {});
  }
};
