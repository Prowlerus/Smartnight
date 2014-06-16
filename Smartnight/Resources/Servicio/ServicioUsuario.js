function cargarDatosUnUsuario(pin) {	
	
	try {
		var miUsuario, db = require('/Database/UsuarioDatabase');
		miUsuario = require('/Modelo/ModeloUsuario');
		
		miUsuario.modelosUsuario = [];
		//REINICIALIZO EL ARRAY DEL MODELO SIEMPRE ANTES DE TRAER DATOS

		rows = db.UsuarioDatabase('select', null, pin, "", "");

		if (rows.isValidRow()) {
			while (rows.isValidRow()) {
				//CARGO DATOS EN VARIABLES DEL MODELO
				miUsuario.datosUsuario = {
					id : rows.fieldByName('UsuarioId'),
					pin :  rows.fieldByName('Pin'),
					nombre : rows.fieldByName('Nombre'),
					empresaId: rows.fieldByName('EmpresaId')};	
				//CARGO EL ARRAY DE MODELOS DEL MODELO USUARIO
				miUsuario.modelosUsuario.push(miUsuario.datosUsuario);
				//CARGO LA VARIABLE CON LOS DATOS EN EL ARRAY
				rows.next();
			}
		}
		else{			
			throw {	
				message : "Pin de usuario incorrecto"
			}; // no encuentra el usuario y rows esta vacio			
		}
	} catch(e) {
		throw {
			message : e.message //algun error en base de datos
		};
	}
};

exports.cargarDatosUnUsuario = cargarDatosUnUsuario;