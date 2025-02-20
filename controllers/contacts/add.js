const { Contact } = require("../../models/contact");

const add = async (req, res) => {
  const { _id } = req.user;
  const data = await Contact.create({ ...req.body, owner: _id });
  res.status(201).json(data);
};

module.exports = add;
