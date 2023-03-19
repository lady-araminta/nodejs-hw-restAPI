const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  const passwordCompare = bcrypt.compare(password, findUser.password);
  if (!findUser || !passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }
  if (!findUser.verify) {
    throw HttpError(404, "User not found");
  }
  const payload = {
    id: findUser._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(findUser._id, { token });
  res.json({
    findUser,
    token,
  });
};

module.exports = login;
