const Viajes = require('../../models/database/tables/viajes');

const crearViaje = async (req,res) => {
		
	const {fecha, horario, empresa, destinos} = req.body;
	let destinosFormateados = [];

	destinos.forEach(destino => {
		destinosFormateados.push(destino[Object.keys(destino)[0]]);
	})
		
	const formData = {
		fecha_salida: fecha,
		hora_salida: horario,
		asientos_disponibles: 44,
		origen_localidad: destinosFormateados[0],
		destino_localidad: destinosFormateados[destinosFormateados.length - 1],
		empresa: empresa,
		destinos: [...destinosFormateados]
	}
	
	const response = await Viajes.create(formData);
	
	res.status(200).json({message: 'ok', status: 200, response});
}
const obtenerViajes = async (req,res) => {
	
	const response = await Viajes.find().populate('origen_localidad').populate('destino_localidad').populate('empresa').populate('destinos');
	
	res.status(200).json({message: 'ok', status: 200, response});
	
}

module.exports = {
	crearViaje,
	obtenerViajes
}