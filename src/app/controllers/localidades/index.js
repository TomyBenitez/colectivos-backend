const Localidades =  require('../../models/database/tables/localidades');

const crearLocalidad = (req, res) => {

	const {body: {localidades}} = req;

	localidades.forEach(localidad => {
		const response = Localidades.create(localidad);
	});

	// logica de crear una localidad
	res.json({
		mensaje: 'Localidades creadas'
	})
}

const modificarLocalidad = (req, res) => {
	// logica de modificar una localidad
	res.json({
		mensaje: 'Modificando localidad'
	})
}

const eliminarLocalidad = (req, res) => {
	// logica de eliminar una localidad
	res.json({
		mensaje: 'Eliminando localidad'
	})
}

const obtenerLocalidades = async (req, res) => {

	const localidades = await Localidades.find().sort({orden:1});

	res.json(localidades)
}

module.exports = {
	crearLocalidad,
	modificarLocalidad,
	eliminarLocalidad,
	obtenerLocalidades
}