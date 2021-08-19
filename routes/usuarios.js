//Rutas para crear los usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

//Crear un usuario

// api/usuarios

router.post('/', 
    usuarioController.crearUsuario
);

module.exports = router;