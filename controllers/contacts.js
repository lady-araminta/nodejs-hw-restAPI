const contactsActions = require("../models/contacts");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const data = await contactsActions.listContacts();
  res.status(200).json(data);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const data = await contactsActions.getContactById(contactId);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(data);
};

const add = async (req, res) => {
  const data = await contactsActions.addContact(req.body);
  res.status(201).json(data);
};

const del = async (req, res) => {
  const { contactId } = req.params;
  const data = await contactsActions.removeContact(contactId);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.json({ code: 200, message: "contact deleted" });
};

const upd = async (req, res) => {
  const { contactId } = req.params;
  const data = await contactsActions.updateContact(contactId, req.body);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(data);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  del: ctrlWrapper(del),
  upd: ctrlWrapper(upd),
};
