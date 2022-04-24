const listContacts = require("./listContacts");
const updateContact = require("./updateContact");
const { v4 } = require("uuid");

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = { ...data, id: v4() };
  contacts.push(newContact);
  await updateContact(contacts);
  return newContact;
};

module.exports = addContact;
