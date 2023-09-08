const problemService = require("../services/problem-service");
const {SUCCESS_CREATE} = require("../utils/consts");

const create = async (req, res, next) => {
    try {
        const {title, description, tag} = req.body;

        const {id} = req.user;
        await problemService.create(title, description, id, tag);
        res.json({message: SUCCESS_CREATE});
    } catch (e) {
        console.log(e);
    }
};

const getAll = async (req, res, next) => {
    try {
        let {q, page, limit, tag} = req.query;
        page = page || 1;
        limit = limit || 6;
        const offset = page * limit - limit;
        const problems = await problemService.getAll({offset, limit, q});
        res.json(problems);
    } catch (error) {
        next(error);
    }
};

module.exports = {create, getAll};

// problem?page=2&limit3&q= find by smth

// problem- pagination, search
// filter - by tag
