const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const updSubscr = async (req, res) => {
  const { id } = req.params;
  const { subscription } = req.body;
  const data = await User.findByIdAndUpdate(
    id,
    { subscription },
    { new: true }
  );
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ email: data.email, subscription: data.subscription });
};

module.exports = updSubscr;
