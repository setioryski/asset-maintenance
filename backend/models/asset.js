'use strict';
module.exports = (sequelize, DataTypes) => {
  const Checklist = sequelize.define('Checklist', {
    checklist_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    asset_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    supervisor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    checklist_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Checklists',
    timestamps: false
  });

  Checklist.associate = function(models) {
    Checklist.belongsTo(models.Asset, { foreignKey: 'asset_id' });
    Checklist.belongsTo(models.User, { foreignKey: 'supervisor_id' });
    Checklist.belongsTo(models.ChecklistTemplate, { foreignKey: 'template_id' });
    Checklist.hasMany(models.ChecklistItem, { foreignKey: 'checklist_id' });
  };

  return Checklist;
};
