//importar el modelo comentario
const Comentarios = require('../models/Comentarios');
const Desaparecido = require('../models/Desaparecido');

exports.create = (req, res) => {
    const comentarios = new Comentarios(req.body);
    console.log(comentarios);
    comentarios.save((err, data) => {
        if (err) return res.status(400).json({
            error: 'error'
        });

        res.json(data);
    });

}

exports.list = (req, res) => {
    Comentarios.find().
    populate('creador', 'nombre apellido').
    populate('desaparecido', '_id nombre1 apellido1', Desaparecido).
    exec((err, data) => {

        if (err) return res.status(400).json({
            error: 'No se pueden listar'
        });

        res.json(data);
    });
}

exports.remove = (req, res) => {
    let comentario = req.comentario;
    console.log(comentario);
    comentario.remove((err, deleteComentario) => {
        if (err) {
            return res.status(400).json({
                error: 'No se logró eliminar'
            });
        }

        res.json(comentario);
    });
}

exports.comentarioId = (req, res, next) => {
    
    Comentarios.findById(req.params.comentarioId).
    populate('creador', 'nombre apellido').
    exec((err, comentario) => {
        if (err || !comentario) {
            return res.status(400).json({
                error: errorHandler(error)
            });
        }

        req.comentario = comentario;
        next();
    });
}

exports.porDesaparecido  = (req,res) => {
    Comentarios.find({'desaparecido':req.params.desaparecido}).
    populate('creador', 'nombre apellido').
    exec((err,data) => {
        if(err){
            return res.status(400).json({
                error: 'Comentario no encontrado'
            });
        }

        res.json(data);
    });
}

/*exports.comentarioList = (req, res) {
    Libro.find({}, function (err, libros) {
      Autor.populate(libros, { path: "autor" }, function (err, libros) {
        res.status(200).send(libros);
      });
    });
}*/

/*exports.comentariosLists = (req, res) => {
    Comentarios.find().
    populate('creador').
    exec((err, data) => {

        if (err) return res.status(400).json({
            error: 'No se pueden listar'
        });

        res.json(data);
    });
}*/
