'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      { user_id: 1, username: 'johnsmith', password: await bcrypt.hash('password123', 10), role: 'Supervisor', division_id: 1 },
      { user_id: 2, username: 'maryjones', password: await bcrypt.hash('password456', 10), role: 'Technician', division_id: 1 },
      { user_id: 3, username: 'alicewang', password: await bcrypt.hash('password789', 10), role: 'Supervisor', division_id: 2 },
      { user_id: 4, username: 'boblee', password: await bcrypt.hash('password000', 10), role: 'Technician', division_id: 2 }
    ];
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
