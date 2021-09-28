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

router.param('desaparecidoId', desaparecidosController.desaparecidoId);

module.exports = router;

/*
[
        check('nombre1', 'El primer nombre es obligatorio').not().isEmpty(),
        check('nombre2', 'El segundo nombre es obligatorio').not().isEmpty(),
        check('apellido1', 'El primer apellido es obligatorio').not().isEmpty(),
        check('apellido2', 'El segundo apellido es obligatorio').not().isEmpty(),
        check('genero', 'El genero es obligatorio').not().isEmpty(),
        check('fechaNacimiento', 'La fecha de nacimiento es obligatoria').not().isEmpty(),
        check('pais', 'El pais es obligatorio').not().isEmpty(),
        check('departamento', 'El estado o despartamento es obligatorio').not().isEmpty(),
        check('ciudad', 'La ciudad es obligatoria').not().isEmpty(),
        check('zipcode', 'El zipcode es obligatorio').not().isEmpty(),
        check('fechad', 'La fecha de ultima vez visto es obligatorio').not().isEmpty(),
        check('craneo', 'El tipo de craneo es obligatorio').not().isEmpty(),
        check('rostro', 'El tipo de rostro es obligatorio').not().isEmpty(),
        check('cuello', 'El tipo de cuello es obligatorio').not().isEmpty(),
        check('ojos', 'El tipo de ojos es obligatorio').not().isEmpty(),
        check('cuerpo', 'La forma del cuerpo es obligatorio').not().isEmpty(),
        check('labios', 'El tipo de labios es obligatorio').not().isEmpty(),
        check('oreja', 'El tipo de orejas es obligatorio').not().isEmpty(),
        check('nariz', 'El tipo de nariz es obligatorio').not().isEmpty(),
        check('piel', 'El tipo de piel es obligatorio').not().isEmpty(),
        check('cpiel', 'El color de piel es obligatorio').not().isEmpty(),
        check('pigm', 'La pigmentación o rasgos de la persona es obligatorio').not().isEmpty(),
        check('peso', 'El peso de la persona es obligatorio').not().isEmpty(),
        check('cabello', 'El tipo de cabello de la persona es obligatorio').not().isEmpty(),
        check('ccabello', 'El color de cabello de la persona es obligatorio').not().isEmpty(),
        check('cojos', 'El color de ojos es obligatorio').not().isEmpty(),
        check('clabios', 'El color de labios es obligatorio').not().isEmpty(),
        check('estatura', 'La estatura es obligatorio').not().isEmpty(),
        check('cdientes', 'El color de dientes es obligatorio').not().isEmpty(),
        check('descripcion', 'Es necesario que coloque información relevante de la persona desaparecida para tener mas datos de la misma').not().isEmpty()
    ],
*/