//Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

const {check} = require('express-validator');

//Iniciar sesion

// api/auth

router.post('/', 
    [
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'La contraseña debe tener minimo 6 caracteres').isLength({min: 6}),
    ],
    authController.autenticarUsuario
);

//Obtener el usuario autenticado
router.get('/',
    auth,
    authController.usuarioAutenticado
)

module.exports = router;