'use strict';
module.exports = (sequelize, DataTypes) => {
  const AssetMaintenanceHistory = sequelize.define('AssetMaintenanceHistory', {
    history_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    asset_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    task_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maintenance_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Asset_Maintenance_History',
    timestamps: false
  });

  AssetMaintenanceHistory.associate = function(models) {
    AssetMaintenanceHistory.belongsTo(models.Asset, { foreignKey: 'asset_id' });
  };

  return AssetMaintenanceHistory;
};
