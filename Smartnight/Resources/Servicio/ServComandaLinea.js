function guardarComanda(nroServ, fecha, dispositivo, total, fechaTurno) {
	try {
		var db = require('/Database/ComandaDatabase');
		db.ComandaDatabase('insert',nroServ, fecha, dispositivo, total, fechaTurno);
		return true;
	} catch(e) {
		alert(e.message);
	}
	return false;
};
exports.guardarComanda = guardarComanda;

function cargarComandas(dispositivo,fechaTurno) {
	try {
		var db = require('/Database/ComandaDatabase'), 
		rows = db.ComandaDatabase('select', "", "", dispositivo, "", fechaTurno);

		var misComandas = require('/Modelo/ModeloComanda');

		misComandas.modelosComanda = [];

		if (rows.rowCount > 0) {
			while (rows.isValidRow()) {

				misComandas.datosComanda = {
					nroServicio : rows.fieldByName('NroServicio'),
					fecha : rows.fieldByName('Fecha'),
					total : rows.fieldByName('Total')
				};

				misComandas.modelosComanda.push(misComandas.datosComanda);

				rows.next();
			}
		} else {
			return null;//retorna cuando no hay registros en la pantalla info turno
		}
	} catch(e) {
		alert(e.message);
	}
};

exports.cargarComandas = cargarComandas;
//**************************************************LINEA DE COMANDA*************************
function guardarLineasComanda(cantidad, producto, totalLinea, fecha, servicio, dispositivo) {
	try {
		var db = require('/Database/LineaDatabase');
		db.LineaDatabase('insert', cantidad, producto, totalLinea, fecha, servicio, dispositivo);
		return true;
	} catch(e) {
		alert(e.message);
	}
	return false;
};
exports.guardarLineasComanda = guardarLineasComanda;
