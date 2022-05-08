const { Schema, model } = require("mongoose");
const Joi = require("joi");
const codeRegexp = /^[0-9]{9}$/;
const contactSchema = Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const addJoiSchema = Joi.object({
  name: Joi.string().required().min(2).max(30),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phone: Joi.string().required().min(2).max(30),
  favorite: Joi.bool(),
  code: Joi.string().pattern(codeRegexp),
});

const favoriteJoiSchema = Joi.object({
  favorite: Joi.bool().required(),
});

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  addJoiSchema,
  favoriteJoiSchema,
};
