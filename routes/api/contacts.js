const express = require("express");

const {
  getAll,
  getById,
  add,
  del,
  upd,
  updStatusContact,
} = require("../../controllers");

const { validateBody, isValidId } = require("../../middlewares");

const { addSchema, updateFavoriteSchema } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", getAll);

router.get("/:contactId", isValidId, getById);

router.post("/", validateBody(addSchema), add);

router.delete("/:contactId", isValidId, del);

router.put("/:contactId", isValidId, validateBody(addSchema), upd);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  updStatusContact
);

module.exports = router;
