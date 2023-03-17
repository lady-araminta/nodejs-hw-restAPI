const { ctrlWrapper } = require("../helpers");

const getAll = require("./contacts/getAll");
const getById = require("./contacts/getById");
const add = require("./contacts/add");
const del = require("./contacts/del");
const upd = require("./contacts/upd");
const updStatusContact = require("./contacts/updStatusContact");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  del: ctrlWrapper(del),
  upd: ctrlWrapper(upd),
  updStatusContact: ctrlWrapper(updStatusContact),
};
