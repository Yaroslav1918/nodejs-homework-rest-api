const listContacts = require("./listContacts");
const updateContact = require("./updateContact");

const updateById = async (id, data) => {
  const contact = await listContacts();
  const idx = contact.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  contact[idx] = { ...data, id };
  await updateContact(contact);
  return contact[idx];
};

module.exports = updateById;
