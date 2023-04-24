const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Cliente = new Schema ({

    nombre: String,
    apellido: String,
    pais: String,
    email:  String,
    telefono: Number,
    empresa: String,
    fecha: String
})


// Crear modelo

module.exports = mongoose.model('cliente', Cliente);