const mongoose = require('mongoose');
const {Schema} = mongoose;

const viajes = new Schema({
	fecha_salida: Date,
	hora_salida: String,
	asientos_disponibles: Number,
	origen_localidad: { type: Schema.Types.ObjectId, ref: 'Localidades' },
	destino_localidad: { type: Schema.Types.ObjectId, ref: 'Localidades' },
	empresa: { type: Schema.Types.ObjectId, ref: 'Empresas' },
	destinos: [{ type: Schema.Types.ObjectId, ref: 'Localidades' }]
});

module.exports = mongoose.model('Viajes', viajes);