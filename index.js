const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Creando el server

const app = express();

//Conectar a la base de datos

conectarDB();

//Habilitar express.json
app.use(express.json({extended:true}));
app.use(cors());

//Asignado el puerto de la app
const PORT = process.env.PORT || 4000;

//Importar las rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));

// -- Ubicación
app.use('/api/pais', require('./routes/pais'));
app.use('/api/ciudad', require('./routes/ciudad'));
//Arrancando la app

app.listen(PORT, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});