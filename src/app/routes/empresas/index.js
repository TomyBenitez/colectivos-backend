const express = require('express');
const { crearEmpresa,editarEmpresa,obtenerEmpresas,obtenerEmpresaIndividual,borrarEmpresa } = require('../../controllers/empresas');

const RUTAS_EMPRESAS = express.Router();

RUTAS_EMPRESAS.route('/')
	.get(obtenerEmpresas)
	.post(crearEmpresa)
	
RUTAS_EMPRESAS.route('/:id')
	.get(obtenerEmpresaIndividual)
	.put(editarEmpresa)
	.delete(borrarEmpresa)
	
module.exports = RUTAS_EMPRESAS;