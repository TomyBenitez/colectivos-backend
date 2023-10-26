const mongoose = require('mongoose');
const { Schema } = mongoose;

const empresa = new Schema({
	nombre: String,
	descripcion: String,
	website_url: String,
	image_path: String,
	activa: Boolean
})

module.exports = mongoose.model('Empresas', empresa);