const { Contact, addJoiSchema } = require("../../models/contact");
const createError = require("../../helpers/createError");

const addContact = async (req, res) => {
  const { _id } = req.user;
  const { error } = addJoiSchema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const result = await Contact.create({ ...req.body, owner: _id });
  res.status(201).json(result);
};

module.exports = addContact;
