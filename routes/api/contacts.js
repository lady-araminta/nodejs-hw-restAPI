const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const { addSchema } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(addSchema), ctrl.add);

router.delete("/:contactId", ctrl.del);

router.put("/:contactId", validateBody(addSchema), ctrl.upd);

module.exports = router;
