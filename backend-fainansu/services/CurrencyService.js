const db = require("../models");

const create = async (type, logo) => {
  try {
    const newCurrency = await db.Currency.create({ type, logo });
    return newCurrency;
  } catch (error) {
    return error.message || "failed to create currency";
  }
};
const getAll = async () => {
  try {
    let currencies = await db.Currency.findAll();

    return currencies;
  } catch (error) {
    console.error(error);
    return error.message || "failed to get all currency";
  }
};
const get = async (id) => {
  try {
    let currency = await db.Currency.findByPk(id);
    return currency;
  } catch (error) {
    throw { status: 500, message: "failed to get currency" };
  }
};

const update = async (id, type, logo) => {
  try {
    const updatedCurrency = await db.Currency.update(
      { type, logo },
      { where: { id } }
    );
    return updatedCurrency;
  } catch (error) {
    return error.message || "failed to update currency";
  }
};

const destroy = async (id) => {
  try {
    const deletedCurrency = await db.Currency.destroy({ where: { id } });
    return deletedCurrency;
  } catch (error) {
    return error.message || "failed to create currency";
  }
};

module.exports = { create, destroy, get, getAll, update };