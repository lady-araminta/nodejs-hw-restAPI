const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const { addSchema, updateFavoriteSchema } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(addSchema), ctrl.add);

router.delete("/:contactId", isValidId, ctrl.del);

router.put("/:contactId", isValidId, validateBody(addSchema), ctrl.upd);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrl.updStatusContact
);

module.exports = router;
