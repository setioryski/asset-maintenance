// backend/migrations/20240101000008-create-checklist.js

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Checklists', {
      checklist_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      asset_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Assets',
          key: 'asset_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' // Diubah dari SET NULL ke CASCADE
      },
      supervisor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'user_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' // Diubah dari SET NULL ke CASCADE
      },
      checklist_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      template_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Checklist_Templates',
          key: 'template_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' // Diubah dari SET NULL ke CASCADE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Checklists');
  }
};
