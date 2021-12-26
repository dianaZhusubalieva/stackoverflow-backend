const ErrorHandler = require("./../utils/error-handler");

const { Problem } = require("./../models");

const create = async (title, description, userId) => {
  await Problem.create({ title, description, userId });
};

module.exports = { create };
