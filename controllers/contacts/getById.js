const Contact = require("../../models/contact");

const { HttpError } = require("../../helpers");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findById(contactId);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(data);
};

module.exports = getById;
