const mongoose = require('mongoose');
const { Schema } = mongoose;

const localidades = new Schema({
	orden: Number,
	nombre: String,
	latitud: Number,
	longitud: Number
})

module.exports = mongoose.model('Localidades', localidades);