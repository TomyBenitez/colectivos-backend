const mongoose = require('mongoose');
const {Schema} = mongoose;

const viajes = new Schema({
	fecha_hora_salida: Date,
	fecha_hora_llegada: Date,
	asientos_disponibles: Number,
	origen_localidad: { type: Schema.Types.ObjectId, ref: 'Localidades' },
	destino_localidad: { type: Schema.Types.ObjectId, ref: 'Localidades' },
	pasajeros: [String]
});

module.exports = mongoose.model('Viajes', viajes);