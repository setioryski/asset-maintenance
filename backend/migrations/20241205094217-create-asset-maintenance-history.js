// backend/migrations/20240101000010-create-asset_maintenance_history.js

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Asset_Maintenance_History', {
      history_id: {
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
      task_description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      maintenance_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true
      },
      remarks: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Asset_Maintenance_History');
  }
};
