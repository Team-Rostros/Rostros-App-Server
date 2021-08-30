//Importar el modelo pais
const Pais = require('../models/Pais');
const errorHandler = require('../helpers/dberrorHandler');

exports.create = (req, res) => {
    
    for(i in req.body){
        let paisModel = new Pais(req.body[i]);
        paisModel.save((err, data) => {
            if (err) return res.status(400).json({
                error: errorHandler(err)
            });
            
        });
    }
    res.json({"message":"created"});
}

exports.list = (req, res) => {
    Pais.find().exec((err, data) => {

        if (err) return res.status(400).json({
            error: errorHandler(err)
        });

        res.json(data);
    });
}

exports.porCodigo = (req, res) => {
    
    Pais.find({'codigo':req.params.porCodigo})
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: 'Pais no encontrado'
                });
            }

            res.json(data);
        });
}