//Rutas para crear los usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const {check} = require('express-validator');

//Crear un usuario

// api/usuarios

router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('apellido', 'El apellido es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'La contraseña debe tener minimo 6 caracteres').isLength({min: 6}),
        check('pais', 'El pais es obligatorio').not().isEmpty(),
        check('ciudad', 'La ciudad es obligatoria').not().isEmpty(),
        check('tel', 'El telefono es obligatorio').not().isEmpty(),
        check('dni', 'El dni es obligatorio').not().isEmpty(),
        check('ide', 'El número de identificacion es obligatorio').not().isEmpty()
    ],
    usuarioController.crearUsuario
);

module.exports = router;