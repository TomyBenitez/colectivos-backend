require('dotenv').config();
const cors = require('cors');
const express = require('express');
const RUTAS_LOCALIDADES = require('./src/app/routes/localidades');
const RUTAS_USUARIOS = require('./src/app/routes/usuarios');

// MONGODB
require('./src/app/models/database/mongoose-connection');

const app = express();

app.use(cors());

app.use(express.json());
app.use('/localidades', RUTAS_LOCALIDADES);
app.use('/auth/user', RUTAS_USUARIOS);

app.listen(process.env.PORT,() => {
	console.log("🚀 ~~ SERVER 	~ CONNECTION: ✅ ~ PORT:", process.env.PORT);
})