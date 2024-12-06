'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    division_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Users',
    timestamps: false
  });

  User.associate = function(models) {
    User.belongsTo(models.Division, { foreignKey: 'division_id' });
    User.hasMany(models.Checklist, { foreignKey: 'supervisor_id' });
    User.hasMany(models.ChecklistItem, { foreignKey: 'technician_id' });
    User.hasMany(models.AuditLog, { foreignKey: 'user_id' });
  };

  return User;
};
