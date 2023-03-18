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

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", getAll);

router.get("/:contactId", isValidId, getById);

router.post("/", validateBody(schemas.addSchema), add);

router.delete("/:contactId", isValidId, del);

router.put("/:contactId", isValidId, validateBody(schemas.addSchema), upd);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updStatusContact
);

module.exports = router;
