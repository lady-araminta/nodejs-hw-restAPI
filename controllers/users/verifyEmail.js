const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const findUser = await User.findOne({ verificationToken });
  if (!findUser) {
    throw HttpError(404, "User not found");
  }
  await User.findByIdAndUpdate(findUser._id, {
    verify: true,
    verificationToken: "",
  });
  res.json({ message: "Verification successful" });
};

module.exports = verifyEmail;
