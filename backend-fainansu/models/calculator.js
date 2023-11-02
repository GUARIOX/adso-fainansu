'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calculator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Calculator.belongsTo(models.User)
    }
  }
  Calculator.init({
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    type: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Calculator',
  });
  return Calculator;
};