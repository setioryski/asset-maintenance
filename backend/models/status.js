'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    status_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Statuses',
    timestamps: false
  });

  Status.associate = function(models) {
    Status.hasMany(models.Asset, { foreignKey: 'status_id' });
  };

  return Status;
};
