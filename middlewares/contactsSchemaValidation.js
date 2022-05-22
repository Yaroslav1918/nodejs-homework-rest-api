const Joi = require("joi");

const contactsSchemaValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    phone: Joi.string().required().min(2).max(30),
  });
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({ status: validationResult.error.details });
  }
  next();
};

module.exports = contactsSchemaValidation;
