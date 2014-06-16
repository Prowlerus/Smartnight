var datosComanda = {
	//omandaId : null,
	nroServicio : null,
	usuario : null,
	fecha : null,
	dispositivo : null,
	total : null,
};

var modelosComanda = [];
var idComanda = 0;
var ultimaMesa = 0;
var cantComandas = 0;


function setComanda(nroServ, usu) {//NUNCA SE USA
	datosComanda = {
		comandaId : this.comandaId + 1,
		nroServicio : nroServ,
		usuario : usu,
		fecha : Date()
	};
	modelosComanda.push(datosComanda);
};

function getUltima() {
	return ultimaMesa;
};
function setUltima(nroMesa) {
	ultimaMesa = nroMesa;
};
function getCantComandas() {
	return cantComandas;
};
function setCantComandas() {
	cantComandas += 1;
};
function setRestarCantComandas() {
	cantComandas -= 1;
};


exports.getCantComandas = getCantComandas;
exports.setCantComandas = setCantComandas;
exports.setRestarCantComandas = setRestarCantComandas;
exports.setComanda = setComanda;
exports.modelosComanda = modelosComanda;
exports.getUltima = getUltima;
exports.setUltima = setUltima;
