const formidable = require('formidable');
const fs = require('fs');
const _ = require('lodash');

//Importar el modelo usuario
const Desaparecido = require('../models/Desaparecido');

exports.create = (req, res) => {

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {

        if (err) {
            return res.status(400).json({
                error: 'Errores en el formulario'
            });
        }

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

    Desaparecido.find({ 'encontrada': 0 }).select('-photo')
        .populate('desaparecido')
        .sort([[sortBy, order,]])
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

exports.findId = (req, res) => {
    if (req.desaparecido) {
        return res.send(req.desaparecido)
    }
    next();
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

exports.update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {

        if (err) {
            return res.status(400).json({
                error: 'Errores en el formulario'
            });
        }
        /* if (files.hasOwnProperty('photo') && files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'Imagen muy pesada máximo 1MB'
                });
            }

            fields.photo.data = fs.readFileSync(files.photo.path);
            fields.photo.contentType = files.photo.type;

            const filter = { _id: fields._id }
            Desaparecido.updateOne(filter, data).then(console.log);
        } */

        const filter = { _id: fields._id }
        delete fields.photo;
        Desaparecido.updateOne(filter, fields).then(console.log);
    });

    res.json({ 'success': true });
}

exports.porCreador = (req, res) => {
    Desaparecido.find({ 'creador': req.params.creador })
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: 'Ciudad no encontrada'
                });
            }

            res.json(data);
        });
}

exports.marcarEncontrado = (req, res) => {

    const filter = { _id: req.params.id }
    const update = { 'encontrada': 1 };

    Desaparecido.updateOne(filter, update).then(console.log);

    res.json({ 'success': true });
}