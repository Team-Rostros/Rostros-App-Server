//Rutas para crear los usuarios
const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentarioController');



// api/usuarios

router.post('/create', comentarioController.create);
router.get('/list/:desaparecido', comentarioController.porDesaparecido);
router.get('/list', comentarioController.list);
router.delete('/:comentarioId', comentarioController.remove);

router.param('comentarioId', comentarioController.comentarioId);

module.exports = router;