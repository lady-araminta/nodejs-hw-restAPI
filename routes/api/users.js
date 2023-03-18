const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");

const { authSchemas } = require("../../models/user");

const { register, login, getCurrentUser } = require("../../controllers");

const router = express.Router();

router.post("/register", validateBody(authSchemas.registerSchema), register);

router.post("/login", validateBody(authSchemas.loginSchema), login);

router.get("/current", authenticate, getCurrentUser);

module.exports = router;
