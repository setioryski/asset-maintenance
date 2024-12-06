'use strict';
module.exports = (sequelize, DataTypes) => {
  const AssetType = sequelize.define('AssetType', {
    asset_type_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    asset_type_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Asset_Types',
    timestamps: false
  });

  AssetType.associate = function(models) {
    AssetType.hasMany(models.Asset, { foreignKey: 'asset_type_id' });
  };

  return AssetType;
};
