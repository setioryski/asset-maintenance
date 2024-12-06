'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Checklists', [
      { checklist_id: 1, asset_id: 1, supervisor_id: 1, checklist_date: '2023-05-05', template_id: 1 },
      { checklist_id: 2, asset_id: 2, supervisor_id: 3, checklist_date: '2023-06-10', template_id: 2 },
      { checklist_id: 3, asset_id: 3, supervisor_id: 1, checklist_date: '2023-07-01', template_id: 3 },
      { checklist_id: 4, asset_id: 4, supervisor_id: 4, checklist_date: '2023-08-05', template_id: 4 }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Checklists', null, {});
  }
};
