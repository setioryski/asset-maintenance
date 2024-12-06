// backend/migrations/20240101000001-create-user.js

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false
      },
      division_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Divisions',
          key: 'division_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' // Diubah dari SET NULL ke CASCADE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
