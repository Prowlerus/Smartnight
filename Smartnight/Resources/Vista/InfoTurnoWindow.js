exports.InfoTurnoWindow = function() {
	var uit = require('/UI/UITurno');
	var uic = require('/UI/UIComanda');

	var win = uit.ContenedorModal();

	var msg = uic.Mensaje('Información de turno');
	var usuario = uit.LblUsuario();
	var datoUsuario = uit.LblDatoUsuario();
	var fechaInicio = uit.LblFechaInicio();
	var datoFechaInicio = uit.LblDatoFechaInicio();
	var fechaFin = uit.LblFechaFin();
	var datoFechaFin = uit.LblDatoFechaFin();
	var importe = uit.LblImporte();
	var datoImporte = uit.LblDatoImporte();
	var contCabeza = uit.ContenedorCabezal();
	var cabeza = uit.CabezaTablaResistros();
	var contenedorRegistros = uit.ContenedorRegistros();
	var btnCerrar = uit.BotonCerrar();

	win.add(msg);
	win.add(usuario);
	win.add(datoUsuario);
	win.add(fechaInicio);
	win.add(datoFechaInicio);
	win.add(fechaFin);
	win.add(datoFechaFin);
	win.add(importe);
	win.add(datoImporte);
	contCabeza.add(cabeza);
	contCabeza.CabezaTablaResistros = cabeza;
	win.add(contCabeza);
	win.add(contenedorRegistros);
	win.add(btnCerrar);

	win.Mensaje = msg;
	win.LblUsuario = usuario;
	win.LblDatoUsuario = datoUsuario;
	win.LblFechaInicio = fechaInicio;
	win.LblDatoFechaInicio = datoFechaInicio;
	win.LblFechaFin = fechaFin;
	win.LblDatoFechaFin = datoFechaFin;
	win.LblImporte = importe;
	win.LblDatoImporte = datoImporte;
	win.ContenedorCabezal = contCabeza;
	win.ContenedorRegistros = contenedorRegistros;
	win.BotonCerrar = btnCerrar;

	return win;
};

