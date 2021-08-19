//Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

const {check} = require('express-validator');

//Crear un usuario

// api/auth

router.post('/', 
    [
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'La contraseña debe tener minimo 6 caracteres').isLength({min: 6}),
    ],
    authController.autenticarUsuario
);

module.exports = router;