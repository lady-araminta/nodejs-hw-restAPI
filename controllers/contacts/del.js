const { Contact } = require("../../models/contact");

const { HttpError } = require("../../helpers");

const del = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndRemove(contactId);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json({ code: 200, message: "contact deleted" });
};

module.exports = del;
