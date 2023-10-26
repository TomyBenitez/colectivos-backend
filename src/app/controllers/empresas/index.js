const Empresas =  require('../../models/database/tables/empresas');

const obtenerEmpresas = async (req,res) => {
	const respuesta = await Empresas.find();
	res.send(respuesta);
}
const obtenerEmpresaIndividual = async (req,res) => {
	const { id } = req.params;
	const empresa = await Empresas.findById(id);
	res.send({ ...empresa });
}
const crearEmpresa = async (req,res) => {
	const nuevaEmpresa = await Empresas.create(req.body);
	res.send(nuevaEmpresa);
}
const editarEmpresa = (req,res) => {}
const borrarEmpresa = (req,res) => {}

module.exports = {
	obtenerEmpresas,
	obtenerEmpresaIndividual,
	crearEmpresa,
	editarEmpresa,
	borrarEmpresa
}