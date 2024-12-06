'use strict';
module.exports = (sequelize, DataTypes) => {
  const Floor = sequelize.define('Floor', {
    floor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    floor_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Floors',
    timestamps: false
  });

  Floor.associate = function(models) {
    Floor.hasMany(models.Asset, { foreignKey: 'floor_id' });
  };

  return Floor;
};
