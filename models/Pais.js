const mongoose = require('mongoose');

const PaisSchema = mongoose.Schema({
    codigo: {
        type:String,
        required: true,
        maxlength : 2,
        unique: true,
    },
    name: {
        type:String,
        required: true,
        maxlength : 100,
    },
    nombre: {
        type:String,
        required: true,
        maxlength : 100,
    },
    nom: {
        type:String,
        required: true,
        maxlength : 100,
    },
    iso3: {
        type:String,
        required: true,
        maxlength : 3,
    },
    codigoTel: {
        type:String,
        required: true,
        maxlength : 6,
    },
});

module.exports = mongoose.model('Paises', PaisSchema);