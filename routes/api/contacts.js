const express = require("express");
const {
  controlWrapper,
  contactsSchemaValidation,
  auth,
} = require("../../middlewares");
const ctrl = require("../../controllers/contacts");
const router = express.Router();

router.get("/", auth, controlWrapper(ctrl.getAllContacts));
router.get("/:id", auth, controlWrapper(ctrl.getById));
router.post(
  "/",
  auth,
  contactsSchemaValidation,
  controlWrapper(ctrl.addContact)
);
router.put(
  "/:id",
  auth,
  contactsSchemaValidation,
  controlWrapper(ctrl.updateContactById)
);
router.patch("/:id/favorite", auth, controlWrapper(ctrl.updateFavorite));
router.delete("/:id", auth, controlWrapper(ctrl.removeContact));

module.exports = router;
