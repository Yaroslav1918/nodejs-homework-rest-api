const { User, schemas } = require("../../models/user");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { v4 } = require("uuid");
const { sendMail, createError } = require("../../helpers");

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
  const verificationToken = v4();
  await User.create({
    email,
    password: hashPassword,
    verificationToken,
    avatarURL,
  });
  const mail = {
    to: email,
    subject: "Подтвеждение email",
    html: `<a target="_blank" href='http://localhost:3038/api/users/${verificationToken}'>Нажмите чтобы подтвердить свой email</a>`,
  };
  await sendMail(mail);
  res.status(201).json({
    user: {
      email,
      subscription: "starter",
    },
  });
};

module.exports = registration;
