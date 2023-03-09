const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.log(error.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const data = await listContacts();
    const findContact = data.find((contact) => contact.id === contactId);
    return findContact || null;
  } catch (error) {
    console.log(error.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const data = await listContacts();
    const index = data.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      return null;
    }
    const deletedContact = data.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
    return deletedContact;
  } catch (error) {
    console.log(error.message);
  }
};

const addContact = async (body) => {
  try {
    const data = await listContacts();
    const newContact = { id: v4(), ...body };
    data.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(data));
    return newContact;
  } catch (error) {
    console.log(error.message);
  }
};

const updateContact = async (contactId, body) => {
  try {
    const data = await listContacts();
    const index = data.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      return null;
    }
    data[index] = { id: contactId, ...body };
    await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
    return data[index];
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
