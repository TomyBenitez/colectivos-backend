const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarios = new Schema({
	nombre: String,
	apellido: String,
	email: String,
	f_uid: String,
})

module.exports = mongoose.model('Usuarios', usuarios);