const express = require("express");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { authSchemas } = require("../../models/user");

const {
  register,
  login,
  getCurrentUser,
  logout,
  updSubscr,
  updAvatar,
  verifyEmail,
  reVerifyEmail,
} = require("../../controllers");

const router = express.Router();

router.post("/register", validateBody(authSchemas.registerSchema), register);

router.get("/verify/:verificationToken", verifyEmail);

router.post(
  "/verify",
  validateBody(authSchemas.reVerifyEmailSchema),
  reVerifyEmail
);

router.post("/login", validateBody(authSchemas.loginSchema), login);

router.get("/current", authenticate, getCurrentUser);

router.post("/logout", authenticate, logout);

router.patch(
  "/",
  authenticate,
  validateBody(authSchemas.subscrSchema),
  updSubscr
);

router.patch("/avatars", authenticate, upload.single("avatar"), updAvatar);

module.exports = router;
