'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChecklistTemplateItem = sequelize.define('ChecklistTemplateItem', {
    template_item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Checklist_Template_Items',
    timestamps: false
  });

  ChecklistTemplateItem.associate = function(models) {
    ChecklistTemplateItem.belongsTo(models.ChecklistTemplate, { foreignKey: 'template_id' });
  };

  return ChecklistTemplateItem;
};
