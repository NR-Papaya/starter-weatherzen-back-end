const router = require("express").Router();
const controller = require("./observations/observations.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

router.route("/").post(controller.create).all(methodNotAllowed);

module.exports = router;