const db = require("../models");

const create = async (creation_date, creation_time, amount, description, UserId, CategoryId) => {
  try {
    const newRegister = await db.Register.create({ creation_date, creation_time, amount, description, UserId, CategoryId });
    return newRegister;
  } catch (error) {
    return error.message || "failed to create register";
  }
};

const getAll = async () => {
  try {
    let registers = await db.Register.findAll();

    return registers;
  } catch (error) {
    console.error(error);
    return error.message || "failed to get all registers";
  }
};
const get = async (id) => {
  try {
    let register = await db.Register.findByPk(id);
    return register;
  } catch (error) {
    throw { status: 500, message: "failed to get register" };
  }
};

const update = async (id, creation_date, creation_time, amount, description, UserId, CategoryId) => {
  try {
    const updatedRegister = await db.Register.update(
      { creation_date, creation_time, amount, description, UserId, CategoryId },
      { where: { id } }
    );
    return updatedRegister;
  } catch (error) {
    return error.message || "failed to update register";
  }
};

const destroy = async (id) => {
  try {
    const deletedRegister = await db.Register.destroy({ where: { id } });
    return deletedRegister;
  } catch (error) {
    return error.message || "failed to create register";
  }
};

module.exports = { create, destroy, get, getAll, update };