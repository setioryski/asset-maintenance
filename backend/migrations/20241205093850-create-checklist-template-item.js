'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Checklist_Template_Items', {
      template_item_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      template_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Checklist_Templates',
          key: 'template_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      item_description: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Checklist_Template_Items');
  }
};
