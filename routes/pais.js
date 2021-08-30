const express = require('express');
const router = express.Router();

const { list, create, porCodigo } = require("../controllers/paisController");

router.get("/list", list);
router.get("/:porCodigo", porCodigo);

router.post("/create", create);

module.exports = router;