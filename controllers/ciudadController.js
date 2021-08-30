//Importar el modelo pais
const Ciudad = require('../models/Ciudad');
const errorHandler = require('../helpers/dberrorHandler');

exports.create = (req, res) => {
    
    for(i in req.body){
        let ciudadModel = new Ciudad(req.body[i]);
        ciudadModel.save((err, data) => {
            if (err) return res.status(400).json({
                error: errorHandler(err)
            });
            
        });
    }
    res.json({"message":"created"});
}

exports.porCodigo = (req, res) => {
    Ciudad.find({'codigo':req.params.codigo, 'nombre':{$regex:req.params.inicial}})
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: 'Ciudad no encontrada'
                });
            }

            res.json(data);
        });
}