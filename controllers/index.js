const { ctrlWrapper } = require("../helpers");

const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const del = require("./del");
const upd = require("./upd");
const updStatusContact = require("./updStatusContact");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  del: ctrlWrapper(del),
  upd: ctrlWrapper(upd),
  updStatusContact: ctrlWrapper(updStatusContact),
};
