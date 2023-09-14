'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Register extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        Register.belongsTo(models.User)
        models.User.hasMany(Register)
    }
  }
  Register.init({
    fecha_creacion: DataTypes.DATE,
    hora_creacion: DataTypes.TIME,
    monto: DataTypes.FLOAT,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Register',
  });
  return Register;
};