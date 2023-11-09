'use strict';
const bcrypt = require("bcrypt")

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Currency)
      User.hasMany(models.Calculator)
      User.hasMany(models.Category)
      User.hasMany(models.Register)
      // models.Currency.hasMany(User)
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    country: DataTypes.STRING,
    CurrencyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });

  User.login = async function (email, password) {
    let user = await User.findOne({
      where: {
        email: email
      },
      attributes: {
        exclude: [ 
            'id',
            'name',
            'email',
            'password',
            'country'
         ]
      }
    });
    if (!user) return { status: 404, message: "User no encontrado" };
    let valid = await user.authenticatePassword(password);
    return valid ? {
      status : 200,
      user,
    } : {
      status: 401,
      message: "Contraseña invalida"
    };
  };

  User.prototype.authenticatePassword = async function (password) {
    try {
      let valid = await bcrypt.compare(password, this.password);
      return valid;
    } catch (error) {
      return error;
    }
  };

  User.beforeBulkCreate(async function (user, options) {
    if (user.password) {
      user.password = await bcrypt.hash(user.password, 10);
      return;
    }
  });

  return User;
};