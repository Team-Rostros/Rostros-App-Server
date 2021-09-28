//Rutas para crear los usuarios
const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentarioController');



// api/usuarios

router.post('/create', comentarioController.create);
router.get('/list/:desaparecido', comentarioController.porDesaparecido);


module.exports = router;