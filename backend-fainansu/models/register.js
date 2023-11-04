'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Register extends Model {
    static associate(models) {
      // Definir las asociaciones aquí
      Register.belongsTo(models.User, { foreignKey: 'UserId' });
      Register.belongsTo(models.Category, { foreignKey: 'CategoryId' });
    }
  }
  Register.init({
    creation_date: DataTypes.DATEONLY, // Utiliza DataTypes.DATEONLY para fechas sin hora
    creation_time: DataTypes.TIME,
    amount: DataTypes.DECIMAL(10, 2), // Utiliza DataTypes.DECIMAL para valores numéricos
    description: DataTypes.STRING, // Utiliza DataTypes.STRING para cadenas de caracteres
    UserId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Register',
  });
  return Register;
};