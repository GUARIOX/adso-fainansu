const db = require("../models");

const create = async (name, email, password, country, CurrencyId) => {
  try {
    const newUser = await db.User.create({ name, email, password, country, CurrencyId });
    return newUser;
  } catch (error) {
    return error.message || "failed to create user";
  }
};
const getAll = async () => {
  try {
    let users = await db.User.findAll();

    return users;
  } catch (error) {
    console.error(error);
    return error.message || "failed to get all users";
  }
};
const get = async (id) => {
  try {
    let user = await db.User.findByPk(id);
    return user;
  } catch (error) {
    throw { status: 500, message: "failed to get user" };
  }
};

const update = async (id, name, email, password, country, CurrencyId) => {
  try {
    const updatedUser = await db.User.update(
      { name, email, password, country, CurrencyId },
      { where: { id } }
    );
    return updatedUser;
  } catch (error) {
    return error.message || "failed to update user";
  }
};

const destroy = async (id) => {
  try {
    const deletedUser = await db.User.destroy({ where: { id } });
    return deletedUser;
  } catch (error) {
    return error.message || "failed to create user";
  }
};

module.exports = { create, destroy, get, getAll, update };