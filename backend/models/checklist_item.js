'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChecklistItem = sequelize.define('ChecklistItem', {
    checklist_item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    checklist_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: true
    },
    technician_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_completed: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'Checklist_Items',
    timestamps: false
  });

  ChecklistItem.associate = function(models) {
    ChecklistItem.belongsTo(models.Checklist, { foreignKey: 'checklist_id' });
    ChecklistItem.belongsTo(models.User, { foreignKey: 'technician_id' });
  };

  return ChecklistItem;
};
