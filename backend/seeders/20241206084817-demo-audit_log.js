'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Audit_Logs', [
      { log_id: 1, user_id: 1, action: 'Created checklist', table_name: 'Checklists', record_id: 1, timestamp: '2023-05-05 09:00:00', description: 'Created checklist for asset AC Unit 001' },
      { log_id: 2, user_id: 2, action: 'Completed checklist item', table_name: 'Checklist_Items', record_id: 1, timestamp: '2023-05-05 09:15:00', description: 'Completed air filter check' },
      { log_id: 3, user_id: 4, action: 'Failed checklist item', table_name: 'Checklist_Items', record_id: 4, timestamp: '2023-06-10 11:00:00', description: 'Failed voltage check on panel' },
      { log_id: 4, user_id: 3, action: 'Created maintenance history', table_name: 'Asset_Maintenance_History', record_id: 2, timestamp: '2023-06-20 14:00:00', description: 'Maintenance performed on electrical panel' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Audit_Logs', null, {});
  }
};
