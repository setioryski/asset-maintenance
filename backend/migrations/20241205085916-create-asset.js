// backend/migrations/20240101000005-create-asset.js

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Assets', {
      asset_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      asset_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      asset_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Asset_Types',
          key: 'asset_type_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' // Diubah dari SET NULL ke CASCADE
      },
      floor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Floors',
          key: 'floor_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' // Diubah dari SET NULL ke CASCADE
      },
      status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Statuses',
          key: 'status_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' // Diubah dari SET NULL ke CASCADE
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
      },
      installation_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      last_maintenance_date: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Assets');
  }
};
