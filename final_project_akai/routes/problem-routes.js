const router = require("express").Router();

const problemController = require("./../controllers/problem-controller");
const auth = require("../middlewares/auth-middleware");

router.post("/create", auth, problemController.create);

module.exports = router;
