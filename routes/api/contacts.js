const express = require("express");
const {
  controlWrapper,
  contactsSchemaValidation,
} = require("../../middlewares");
const ctrl = require("../../controllers");
const router = express.Router();

router.get("/", controlWrapper(ctrl.getAllContacts));
router.get("/:id", controlWrapper(ctrl.getById));
router.post("/", contactsSchemaValidation, controlWrapper(ctrl.addContact));
router.delete("/:id", controlWrapper(ctrl.removeContact));
router.put(
  "/:id",
  contactsSchemaValidation,
  controlWrapper(ctrl.updateContactById)
);

module.exports = router;
