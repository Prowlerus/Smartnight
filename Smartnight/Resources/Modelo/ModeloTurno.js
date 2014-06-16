var utiles = require('/Utilidades/Utiles'),

    datosTurno = {
	usuario : null,
	fechaInicio : null,
	fechaFin : null,
	montoVendido : 0,
	estado : 1,
	dispositivo : null
};
function setTurno(user,dispositivo) {
    
	this.usuario = user;
	this.fechaInicio = utiles.obtenerFecha();
	this.fechaFin = '--/--/-- - --:--:--';
	this.montoVendido = 0;
	this.estado = 1;
	this.dispositivo = dispositivo;
};
function setTurnoBD(user,f1,f2,monto,estado,dispositivo) {
	this.usuario = user;
	this.fechaInicio = f1;
	this.fechaFin = f2;//no es necesario cargarlo
	this.montoVendido = monto;
	this.estado = estado;
	this.dispositivo = dispositivo;
};
function sumarMonto(monto) {
	this.montoVendido += monto;
};
function getMonto(){
    return this.montoVendido;
}

function getTurno() {
	return datosTurno;
};

exports.getMonto = getMonto;
exports.setTurnoBD = setTurnoBD;
exports.setTurno = setTurno;
exports.sumarMonto = sumarMonto;
exports.getTurno = getTurno;
exports.datosTurno = datosTurno;
