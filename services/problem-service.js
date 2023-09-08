const ErrorHandler = require("../utils/error-handler");

const { Problem } = require("../models");
const { Op } = require("sequelize");

const create = async (title, description, userId, tag) => {
  await Problem.create({ title, description, userId, tag });
};

const getAll = async ({ q, offset, limit }) => {
  // search
  if (q) {
    return await Problem.findAndCountAll({
      where: {
        // Op - sequelize operator
        [Op.or]: [
          // {
          //   tag: {
          //     // % - is everythin after
          //     // "%" + "smth" + "%"
          //     [Op.iLike]: "%" + q + "%",
          //   },
          // },
          {
            title: {
              [Op.iLike]: "%" + q + "%",
            },
          },
        ],
      },
      limit,
      offset,
    });
  }
  if (tag) {
    return await Problem.findAndCountAll({
      where: {
        tag,
      },
      limit,
      offset,
    });
  }
  return await Problem.findAndCountAll({ limit, offset });
};

module.exports = { create, getAll };
