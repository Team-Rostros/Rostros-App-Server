const mongoose = require('mongoose');

const ComentariosSchema = mongoose.Schema({
    descripcion: {
        type: String,
        required: true,
        trim: true
    },

    creador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true,
    },

    desaparecido: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Desaparecido',
        require: true,
    }



}, { timestamps: true });

module.exports = mongoose.model('Comentarios', ComentariosSchema);