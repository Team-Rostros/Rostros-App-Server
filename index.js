const express = require('express');
const conectarDB = require('./config/db');

//Creando el server

const app = express();

//Conectar a la base de datos

conectarDB();

//Asignado el puerto de la app
const PORT = process.env.PORT || 4000;



//Arrancando la app

app.listen(PORT, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});