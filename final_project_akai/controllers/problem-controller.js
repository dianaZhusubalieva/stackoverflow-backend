const problemService = require("./../services/problem-service");
const { SUCCESS_CREATE } = require("../utils/consts");

const create = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const { id } = req.user;
    await problemService.create(title, description, id);
    res.json({ message: SUCCESS_CREATE });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { create };
