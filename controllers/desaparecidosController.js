const formidable = require('formidable');
const fs = require('fs');
const _ = require('lodash');

//Importar el modelo usuario
const Desaparecido = require('../models/Desaparecido');

exports.create = (req, res) => {
    
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        
        if(err){
            return res.status(400).json({
                error: 'Errores en el formulario'
            });
        }

        /* const { nombre1, nombre2, apellido1, apellido2 } = fields;
        const comprobar = Desaparecido.findOne({ nombre1, nombre2, apellido1, apellido2 });
        if (comprobar) {
            return res.json({ error: "Hemos encontrado que la información suministrada ya hace parte de una persona publicada como desaparecida" });
        } */

        const desaparecido = new Desaparecido(fields);
        
        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'Imagen muy pesada máximo 1MB'
                });
            }
            desaparecido.photo.data = fs.readFileSync(files.photo.path);
            desaparecido.photo.contentType = files.photo.type;
        }

        desaparecido.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: 'No se pudo crear'
                });
            }

            res.json(result);
        });
    });
}

exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name';

    Desaparecido.find().select('-photo')
        .populate('desaparecido')
        .sort([[sortBy, order, ]])
        .exec((err, items) => {
            if (err) {
                return res.status(400).json({
                    error: 'Desaparecido no encontrado'
                });
            }

            res.json(items);
        });
}

exports.remove = (req, res) => {
    let desaparecido = req.desaparecido;
    desaparecido.remove((err, deleteDesaparecido) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(error)
            });
        }

        res.json(desaparecido);
    });
}

exports.desaparecidoId = (req, res, next) => {
    Desaparecido.findById(req.params.desaparecidoId)
        .populate("desaparecidos")
        .exec((err, desaparecido) => {
            if (err || !desaparecido) {
                return res.status(400).json({
                    error: 'No se encontró el desaparecido'
                });
            }

            req.desaparecido = desaparecido;
            next();
        });
}

exports.photo = (req, res, next) => {
    if (req.desaparecido.photo.data) {
        res.set('Content-Type', req.desaparecido.photo.contentType);
        return res.send(req.desaparecido.photo.data)
    }
    next();
}