const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Contacto = new Schema ({
    Nombre: String,
    Apellido: String,
    cliente: String,
    fecha: String,
    descripcion: String,
    estado: String,
    tipo:  String
})

// Crear modelo

module.exports = mongoose.model('contacto', Contacto);