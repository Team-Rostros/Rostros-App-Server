const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    nombre: {
        type:String,
        required: true,
        trim:true
    },
    apellido:{
        type:String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required: true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required: true,
        trim:true
    },
    pais:{
        type:String,
        required:true,
        trim:true
    },
    ciudad:{
        type:String,
        required:true,
        trim:true
    },
    tel:{
        type:String,
        required:true,
        trim:true
    },
    dni:{
        type:String,
        required:true,
        trim:true
    },
    ide:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    registro:{
        type:Date,
        default:Date.now()
    },
    is_admin:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Usuario', UsuariosSchema);