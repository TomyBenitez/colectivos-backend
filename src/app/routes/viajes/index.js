const express = require('express');
const { crearViaje, obtenerViajes } = require('../../controllers/viajes');

const RUTAS_VIAJES = express.Router();

RUTAS_VIAJES.route('/')
	.get(obtenerViajes)
	.post(crearViaje)
	
module.exports = RUTAS_VIAJES;