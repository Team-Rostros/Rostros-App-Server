const express = require('express');
const router = express.Router();

const { create, porCodigo } = require("../controllers/ciudadController");

router.get("/:codigo/:inicial", porCodigo);
router.post("/create", create);

module.exports = router;