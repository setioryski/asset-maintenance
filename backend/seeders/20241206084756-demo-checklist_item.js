'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Checklist_Items', [
      { checklist_item_id: 1, checklist_id: 1, item_description: 'Air filters cleaned or replaced', status: 'Completed', remarks: 'No issues', technician_id: 2, date_completed: '2023-05-05' },
      { checklist_item_id: 2, checklist_id: 1, item_description: 'Temperature control calibration', status: 'Pending', remarks: null, technician_id: null, date_completed: null },
      { checklist_item_id: 3, checklist_id: 2, item_description: 'Electrical panel integrity check', status: 'Completed', remarks: 'No issues', technician_id: 4, date_completed: '2023-06-10' },
      { checklist_item_id: 4, checklist_id: 2, item_description: 'Voltage checks on circuits', status: 'Failed', remarks: 'Found issue', technician_id: 4, date_completed: '2023-06-10' },
      { checklist_item_id: 5, checklist_id: 3, item_description: 'Plumbing pipe integrity check', status: 'Completed', remarks: 'No issues', technician_id: 2, date_completed: '2023-07-01' },
      { checklist_item_id: 6, checklist_id: 3, item_description: 'Water pressure test', status: 'Pending', remarks: null, technician_id: null, date_completed: null },
      { checklist_item_id: 7, checklist_id: 4, item_description: 'Elevator door operation check', status: 'Completed', remarks: 'No issues', technician_id: 3, date_completed: '2023-08-05' },
      { checklist_item_id: 8, checklist_id: 4, item_description: 'Lift safety inspection', status: 'Completed', remarks: 'No issues', technician_id: 3, date_completed: '2023-08-05' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Checklist_Items', null, {});
  }
};
