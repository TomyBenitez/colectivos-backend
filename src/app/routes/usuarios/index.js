const express = require('express');
const { obtenerUsuario, crearUsuario } = require('../../controllers/usuarios');

const RUTAS_USUARIOS = express.Router();

RUTAS_USUARIOS.route('/')
	.get(obtenerUsuario)
	.post(crearUsuario)
	
module.exports = RUTAS_USUARIOS;