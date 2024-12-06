'use strict';
module.exports = (sequelize, DataTypes) => {
  const Division = sequelize.define('Division', {
    division_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    division_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Divisions',
    timestamps: false
  });

  Division.associate = function(models) {
    Division.hasMany(models.User, { foreignKey: 'division_id' });
    Division.hasMany(models.Asset, { foreignKey: 'division_id' });
    Division.hasMany(models.ChecklistTemplate, { foreignKey: 'division_id' });
  };

  return Division;
};
