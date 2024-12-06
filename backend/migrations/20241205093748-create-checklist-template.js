'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Checklist_Templates', {
      template_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      division_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Divisions',
          key: 'division_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      template_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      creation_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      version_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Checklist_Templates');
  }
};
