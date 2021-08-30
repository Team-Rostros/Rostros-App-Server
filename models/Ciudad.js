const mongoose = require('mongoose');

const CiudadesSchema = mongoose.Schema({
    codigo: {
        type:String,
        required: true,
        maxlength : 2,
        unique: true,
    },
    nombre: {
        type:String,
        required: true,
        maxlength : 100,
    },
});

module.exports = mongoose.model('Ciudades', CiudadesSchema);