const db = require("../models");

const create = async (name_ctg, icon, type, UserId) => {
  try {
    const newCategory = await db.Category.create({ name_ctg, icon, type, UserId });
    return newCategory;
  } catch (error) {
    return error.message || "failed to create category";
  }
};
const getAll = async () => {
  try {
    let categories = await db.Category.findAll();

    return categories;
  } catch (error) {
    console.error(error);
    return error.message || "failed to get all categories";
  }
};
const get = async (id) => {
  try {
    let category = await db.Category.findByPk(id);
    return category;
  } catch (error) {
    throw { status: 500, message: "failed to get category" };
  }
};

const update = async (id, name_ctg, icon, type, UserId) => {
  try {
    const updatedCategory = await db.Category.update(
      { name_ctg, icon, type, UserId },
      { where: { id } }
    );
    return updatedCategory;
  } catch (error) {
    return error.message || "failed to update category";
  }
};

const destroy = async (id) => {
  try {
    const deletedCategory = await db.Category.destroy({ where: { id } });
    return deletedCategory;
  } catch (error) {
    return error.message || "failed to create category";
  }
};

module.exports = { create, destroy, get, getAll, update };