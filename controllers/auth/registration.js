const { User, schemas } = require("../../models/user");
const createError = require("../../helpers/createError");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

const registration = async (req, res) => {
  const { error } = schemas.signup.validate(req.body);
  if (error) {
    throw createError(400, "Email or password invalid");
  }
  const { email, password } = req.body;
  const result = await User.findOne({ email });
  if (result) {
    throw createError(409, "Email already exist");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  await User.create({ email, password: hashPassword, avatarURL });
  res.status(201).json({
    user: {
      email,
      subscription: "starter",
    },
  });
};

module.exports = registration;
