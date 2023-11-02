const db = require("../models");

const create = async (name, icon, type, UserId) => {
  try {
    const newCalculator = await db.Calculator.create({ name, icon, type, UserId });
    return newCalculator;
  } catch (error) {
    return error.message || "failed to create calculator";
  }
};
const getAll = async () => {
  try {
    let calculator = await db.Calculator.findAll();

    return calculator;
  } catch (error) {
    console.error(error);
    return error.message || "failed to get all calculators";
  }
};
const get = async (id) => {
  try {
    let calculator = await db.Calculator.findByPk(id);
    return calculator;
  } catch (error) {
    throw { status: 500, message: "failed to get calculator" };
  }
};

const update = async (id, name, icon, type, UserId) => {
  try {
    const updatedCalculator = await db.Calculator.update(
      { name, icon, type, UserId },
      { where: { id } }
    );
    return updatedCalculator;
  } catch (error) {
    return error.message || "failed to update calculator";
  }
};

const destroy = async (id) => {
  try {
    const deletedCalculator = await db.Calculator.destroy({ where: { id } });
    return deletedCalculator;
  } catch (error) {
    return error.message || "failed to create calculator";
  }
};

module.exports = { create, destroy, get, getAll, update };