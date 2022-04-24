const listContacts = require("./listContacts");

const getContactById = async (id) => {
  const products = await listContacts();
  const result = products.find((item) => item.id === id);
  if (!result) {
    return null;
  }
  return result;
};

module.exports = getContactById;
