//Importar el modelo usuario
const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');


exports.crearUsuario = async (req, res) =>{

    //Extraer email y password
    const {email, password} = req.body;

    
    try{
        //Revisar que el usuario registrado sea unico
        let usuario = await Usuario.findOne({email});

        if(usuario){
            return res.status(400).json({msg: "El usuario ya existe"});
        }

        //Crear el nuevo usuario
        usuario = new Usuario(req.body);

        //Hashear el password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);

        //Guardar usuario
        await usuario.save();

        //Mensaje
        res.send('Usuario creado correctamente');
    }catch(error){
        console.log(error);
        res.status(400).json({msg: "Hubo un error"});
    }
}