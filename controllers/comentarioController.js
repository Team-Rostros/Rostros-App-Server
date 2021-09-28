//importar el modelo comentario
const Comentarios = require('../models/Comentarios');

exports.create = (req, res) => {
    const comentarios = new Comentarios(req.body);
    comentarios.save((err, data) => {
        if (err) return res.status(400).json({
            error: 'error'
        });

        res.json(data);
    });

}




exports.porDesaparecido  = (req,res) => {
    Comentarios.find({'desaparecido':req.params.desaparecido})
    .exec((err,data) => {
        if(err){
            return res.status(400).json({
                error: 'Comentario no encontrado'
            });
        }

        res.json(data);
    });
}