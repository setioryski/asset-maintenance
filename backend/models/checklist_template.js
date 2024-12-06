'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChecklistTemplate = sequelize.define('ChecklistTemplate', {
    template_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    division_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    template_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    version_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Checklist_Templates',
    timestamps: false
  });

  ChecklistTemplate.associate = function(models) {
    ChecklistTemplate.belongsTo(models.Division, { foreignKey: 'division_id' });
    ChecklistTemplate.hasMany(models.ChecklistTemplateItem, { foreignKey: 'template_id' });
    ChecklistTemplate.hasMany(models.Checklist, { foreignKey: 'template_id' });
  };

  return ChecklistTemplate;
};
