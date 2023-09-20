const admin = require("firebase-admin");
const { initializeApp } = require('firebase-admin/app');
const firebaseKey = require("./key/firebaseAccountKey.json");
const Usuarios = require('../../models/database/tables/usuarios');

initializeApp({
	credential: admin.credential.cert(firebaseKey)
})

const obtenerUsuario = async (req,res,next) => {
	
}

const crearUsuario = async (req,res,next) => {
	const { body: usuario } = req;
	
	try {
		const auth = admin.auth();
		
		delete usuario.repetirPassword;
		delete usuario.repetirEmail;
		delete usuario.password;
		
		const user = await auth.createUser({
			email: usuario.email,
			emailVerified: false,
			password: usuario.password,
			displayName: `${usuario.nombre} ${usuario.apellido}`,
			disabled: false,
		})
		
		usuario.f_uid = user.uid;
		
		const newUser = Usuarios.create(usuario);
		
		res.send(newUser);
	} catch (error) {
		res.status(500).send({error})
	}
	
}

module.exports = {
	obtenerUsuario,
	crearUsuario
}