const contactsOperations = require("../models/contacts");

const updateContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsOperations.updateById(id, req.body);
  if (!result) {
    return res.status(404).json({ message: `Contact with id=${id} not found` });
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateContactById;
