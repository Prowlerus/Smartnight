function guardarTurno(fechaInicio, fechaFin, activo, montoVendido, usuario, dispositivo) {
	try {
		var db = require('/Database/TurnoDatabase');
		db.TurnoDatabase('insert', fechaInicio, fechaFin, activo, montoVendido, usuario, dispositivo);
		return true;
	} catch(e) {
		alert(e.message);
	}
	return false;
};
exports.guardarTurno = guardarTurno; 

function actualizarTurno(fechaFin,  montoVendido) {
	try {
		var db = require('/Database/TurnoDatabase');
		
		db.TurnoDatabase('update', "", fechaFin, 0, "", "", "");
		return true;
	} catch(e) {
		alert(e.message);
	}
	return false;
};
exports.actualizarTurno = actualizarTurno; 

function estaActivo(dispositivo,  fechaInicio) {
	try {
		var db = require('/Database/TurnoDatabase'),
		    row = db.TurnoDatabase('select', fechaInicio, "", "", "", "", dispositivo);
		if ((row.rowCount > 0) && (row.isValidRow)) {
			row = row.fieldByName('Activo');
			return row;
		}
		
	} catch(e) {
		alert(e.message);
	}
	return 0;
};
exports.estaActivo = estaActivo;

function existeTurno() {
	try {
		var userId, turnoDb = require('/Database/TurnoDatabase'),
		    turno = require('/Modelo/ModeloTurno'),
		    row = turnoDb.TurnoDatabase('selectExiste', "", "", "", "", "", "");
		if ((row.rowCount > 0) && (row.isValidRow)) {
			 var userId = row.fieldByName('UsuarioId'), //Aca traer el ID pero toy guardando el nombre!
			 f1 = row.fieldByName('FechaInicio'),
			 f2 = '--/--/-- - --:--:--',
			 monto = row.fieldByName('MontoVendido'),		
			 estado = row.fieldByName('Activo'),
			 dispositivo = row.fieldByName('Dispositivo'),
			
			 usuarioDb = require('/Database/UsuarioDatabase'),
			 miUsuario = require('/Modelo/ModeloUsuario'),
			 
			 row2 = usuarioDb.UsuarioDatabase('selectPorId', userId, "", "", "");
			if ((row2.rowCount > 0) && (row2.isValidRow)){
			    miUsuario.modelosUsuario = [];    				
    				
				miUsuario.datosUsuario = {
				id : userId,
				nombre : row2.fieldByName('Nombre'),
				empresaId : row2.fieldByName('EmpresaId')};
								
				//CARGO EL ARRAY DE MODELOS DEL MODELO USUARIO				
				miUsuario.modelosUsuario.push(miUsuario.datosUsuario);		
				
			}
			turno.setTurnoBD(miUsuario.modelosUsuario[0].nombre,f1,f2,monto,estado,dispositivo);
			return true;
		}
		
	} catch(e) {
		alert(e.message);
	}
	return false;
};
exports.existeTurno = existeTurno; 

function setMontoVendido(totalComanda){
    var turno = require('/Modelo/ModeloTurno');
    turno.sumarMonto(totalComanda);
    try {
        var db = require('/Database/TurnoDatabase');
        db.TurnoDatabase('actualizarMonto', "", "", "", turno.getMonto(), "", "");
        return true;
    } catch(e) {
        alert(e.message);
    }
    return false;
    
} 
exports.setMontoVendido = setMontoVendido;

