const express = require("express");

const { validateBody } = require("../../middlewares");

const { authSchemas } = require("../../models/user");

const { register, login } = require("../../controllers");

const router = express.Router();

router.post("/register", validateBody(authSchemas.registerSchema), register);

router.post("/login", validateBody(authSchemas.loginSchema), login);

module.exports = router;
