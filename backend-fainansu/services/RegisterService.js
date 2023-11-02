const db = require("../models");

const create = async (fecha_creacion, hora_creacion, monto, descripcion, UserId, CategoryId) => {
  try {
    const newRegister = await db.Register.create({ fecha_creacion, hora_creacion, monto, descripcion, UserId, CategoryId });
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

const update = async (id, fecha_creacion, hora_creacion, monto, descripcion, UserId, CategoryId) => {
  try {
    const updatedRegister = await db.Register.update(
      { fecha_creacion, hora_creacion, monto, descripcion, UserId, CategoryId },
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