const getAllContacts = require("./getAllContacts");
const getById = require("./getById");
const addContact = require("./addContact");
const updateContactById = require("./updateContactById");
const removeContact = require("./removeContact");
const updateFavorite = require("./updateFavorite")

module.exports = {
  getAllContacts,
  getById,
  addContact,
  updateContactById,
  removeContact,
  updateFavorite,
};
