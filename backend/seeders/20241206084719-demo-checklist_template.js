'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Checklist_Templates', [
      { template_id: 1, division_id: 1, template_name: 'AC Maintenance Template', creation_date: '2023-01-01', version_number: 1 },
      { template_id: 2, division_id: 2, template_name: 'Electrical Panel Check', creation_date: '2023-02-15', version_number: 1 },
      { template_id: 3, division_id: 3, template_name: 'Plumbing Inspection', creation_date: '2023-03-01', version_number: 1 },
      { template_id: 4, division_id: 4, template_name: 'Elevator Inspection', creation_date: '2023-04-10', version_number: 1 }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Checklist_Templates', null, {});
  }
};
