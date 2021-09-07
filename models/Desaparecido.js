const mongoose = require('mongoose');

const DesaparecidosSchema = mongoose.Schema({
    // Información personal
    nombre1: {
        type:String,
	    required:true,
	    trim:true
    },
    nombre2: {
        type:String,
        required:true,
        trim:true
    },
    apellido1:{
        type:String,
	    required:true,
	    trim:true
    },
    apellido2:{
        type:String,
	    required:true,
	    trim:true
    },
    genero:{
        type:String,
	    required:true,
	    trim:true
    },
    fechaNacimiento:{
        type: Date,
        required:true,
        trim:true
    },

    // Ultima vez visto
    pais:{
        type:String,
        required:true,
        trim:true
    },
    departamento:{
        type:String,
        required:true,
        trim:true
    },
    ciudad:{
        type:String,
        required:true,
        trim:true
    },
    zipcode:{
        type:String,
        required:true,
        trim:true
    },
    fechad:{
        type:Date,
        required:true,
        trim:true
    },

    // Características morfológicas 
    craneo:{
        type:String,
        required:true
    },
    rostro:{
        type:String,
        required:true
    },
    cuello:{
        type:String,
        required:true
    },
    ojos:{
        type:String,
        required:true
    },
    cuerpo:{
        type:String,
        required:true
    },
    labios:{
        type:String,
        required:true
    },
    oreja:{
        type:String,
        required:true
    },
    nariz:{
        type:String,
        required:true
    },

    // Caracrerísticas físicas 
    piel:{
        type:String,
        required:true
    },
    cpiel:{
        type:String,
        required:true
    },
    pigm:{
        type:String,
        required:true
    },
    peso:{
        type:String,
        required:true,
        trim:true
    },
    cabello:{
        type:String,
        required:true
    },
    ccabello:{
        type:String,
        required:true
    },
    cojos:{
        type:String,
        required:true
    },
    clabios:{
        type:String,
        required:true
    },
    estatura:{
        type:String,
        required:true
    },
    cdientes:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    registro:{
        type:Date,
        default:Date.now()
    },
    photo: {
        data: Buffer,
        contentType: String,
        required:false
    }
});

module.exports = mongoose.model('desaparecidos', DesaparecidosSchema);