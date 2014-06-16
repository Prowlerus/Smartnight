exports.ModificarLinealWindow = function() {
	var uic = require('/UI/UIComanda');	
	var win = uic.ContenedorModal();
	
	var btnAceptar = uic.BotonAceptar();
	var btnCancelar = uic.BotonCancelar();
	var msg = uic.Mensaje('(aca va el nombre del producto)');
	var picker = uic.CrearPicker();
	
	win.add(msg);
	win.add(picker);
	win.add(btnAceptar);
	win.add(btnCancelar);
	
	win.Mensaje = msg;
	win.CrearPicker = picker;
	win.BotonAceptar = btnAceptar;
	win.BotonCancelar = btnCancelar;
	return win;
};