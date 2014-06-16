exports.CodigoWindows = function() {
	var ui = require('/UI/UIPrincipal');

	var win = ui.ContenedorModalCodigo();

	var text = ui.TextFieldCodigo();
	var boton = ui.ButtonCodigoCanjear();
	var cancelar = ui.ButtonCancelCodigo();

	win.add(text);
	win.add(boton);
	win.add(cancelar);

	win.TextFieldCodigo = text;
	win.ButtonCodigoCanjear = boton;
	win.ButtonCancelCodigo = cancelar;
	
	return win;
}; 