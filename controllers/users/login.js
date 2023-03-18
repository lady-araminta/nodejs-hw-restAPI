const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const login = async (req, res) => {
  const { email, password } = req.body;
};

module.exports = login;
