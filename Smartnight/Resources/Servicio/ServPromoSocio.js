function cargarPromociones(cod) {
	try {
		var db = require('/Database/PromocionDatabase'), rows = db.PromocionDatabase('selectPorCod', "", "","","",cod);

		var misPromociones = require('/Modelo/ModeloPromocion');

		misPromociones.modelosPromociones = [];

		if (rows.isValidRow()) {
			while (rows.isValidRow()) {

				misPromociones.datosPromocion = {
					codigo : rows.fieldByName('Codigo'),
					productoId : rows.fieldByName('ProductoId'),
					porcentajeDesc : rows.fieldByName('PorcentajeDesc'),
					importeDesc : rows.fieldByName('ImporteDesc'),
				};

				misPromociones.modelosPromociones.push(misPromociones.datosPromocion);

				rows.next();
			}
		} else {
			throw {
				message : "No hay promociones ingresadas en la base de datos"
			};
		}
	} catch(e) {
		alert(e.message);
	}
};

exports.cargarPromociones = cargarPromociones;

function cargarSocios(cod) {
	try {
		var db = require('/Database/SocioDatabase'), rows = db.SocioDatabase('selectPorCod', "", "","","",cod);

		var misSocios = require('/Modelo/ModeloSocio');

		modelosSocios.modelosSocios = [];

		if (rows.isValidRow()) {
			while (rows.isValidRow()) {

				modelosSocios.datosSocio = {
					id : rows.fieldByName('Id'),
					codigo : rows.fieldByName('Codigo'),
					nombre : rows.fieldByName('Nombre'),
					PorcentajeDesc : rows.fieldByName('PorcentajeDesc'),
				};

				modelosSocios.modelosSocios.push(modelosSocios.datosSocio);

				rows.next();
			}
		} else {
			throw {
				message : "No hay socios ingresados en la base de datos"
			};
		}
	} catch(e) {
		alert(e.message);
	}
};

exports.cargarSocios = cargarSocios;