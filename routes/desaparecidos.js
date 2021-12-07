//Rutas para crear los usuarios
const express = require('express');
const router = express.Router();
const desaparecidosController = require('../controllers/desaparecidosController');
const {check} = require('express-validator');

//Crear un usuario

// api/usuarios

router.post('/create', desaparecidosController.create);

router.get('/list', desaparecidosController.list);

router.get('/list/:creador', desaparecidosController.porCreador);

router.get('/photo/:desaparecidoId', desaparecidosController.photo);

router.get('/:desaparecidoId', desaparecidosController.findId);

router.put('/update', desaparecidosController.update);

router.put('/estado/:id', desaparecidosController.marcarEncontrado);

router.delete('/:desaparecidoId', desaparecidosController.remove);

router.param('desaparecidoId', desaparecidosController.desaparecidoId);

module.exports = router;
