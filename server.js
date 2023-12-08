require('dotenv').config();
const cors = require('cors');
const express = require('express');
const RUTAS_LOCALIDADES = require('./src/app/routes/localidades');
const RUTAS_USUARIOS = require('./src/app/routes/usuarios');
const RUTAS_EMPRESAS = require('./src/app/routes/empresas')
const RUTAS_VIAJES = require('./src/app/routes/viajes');

// MONGODB
require('./src/app/models/database/mongoose-connection');

const app = express();

app.use(cors());

app.use(express.json());
app.use('/localidades', RUTAS_LOCALIDADES);
app.use('/auth/user', RUTAS_USUARIOS);
app.use('/empresas', RUTAS_EMPRESAS);
app.use('/viajes', RUTAS_VIAJES)

app.listen(process.env.PORT,() => {
	console.log("🚀 ~~ SERVER 	~ CONNECTION: ✅ ~ PORT:", process.env.PORT);
})