const { HttpError, sendEmail } = require("../../helpers");
const { User } = require("../../models/user");

const { BASE_URL } = process.env;

const reVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const findUser = User.findOne({ email });
  if (!findUser) {
    throw HttpError(404, "User not found");
  }
  if (findUser.verify) {
    throw HttpError(400, "Verification has already been passed");
  }
  const verifyEmail = {
    to: email,
    subject: "Confirm Your Email",
    html: `<p>By clicking on the following link, you are confirming your email address.</p> <br> <a href="${BASE_URL}/api/users/verify/${findUser.verificationToken}" taget="_blank">Confirm Email Address</a>`,
  };
  await sendEmail(verifyEmail);
  res.json({ message: "Verification email sent" });
};

module.exports = reVerifyEmail;
