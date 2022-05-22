const { Contact } = require("../../models/contact");
const createError = require("../../helpers/createError");
const { isValidObjectId } = require("mongoose");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const isValid = isValidObjectId(id);
  if (!isValid) {
    throw createError(404);
  }
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw createError(404);
  }
  res.json({
    message: "contact deleted",
  });
};

module.exports = removeContact;
