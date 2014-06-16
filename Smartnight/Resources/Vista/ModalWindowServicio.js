exports.ModalServicio = function() {
	var ui = require('UI/UILogin'),
	 uiP = require('UI/UIPrincipal'),

	 win = uiP.ModalServicio(),
	 view = uiP.VistaServicio(),
	 view2 = uiP.VistaServicio2(),

	// 1
	 btnPad1 = ui.ButtonPad('1'),
	// 2
	 btnPad2 = ui.ButtonPad('2'),
	// 3
	 btnPad3 = ui.ButtonPad('3'),
	// 4
	 btnPad4 = ui.ButtonPad('4'),
	// 5
	 btnPad5 = ui.ButtonPad('5'),
	// 6
	 btnPad6 = ui.ButtonPad('6'),
	// 7
	 btnPad7 = ui.ButtonPad('7'),
	// 8
	 btnPad8 = ui.ButtonPad('8'),
	// 9
	 btnPad9 = ui.ButtonPad('9'),
	// 0
	 btnPad0 = ui.ButtonPad0('0'),
	// DELETE
	 btnPadDel = ui.ButtonPadDel(),
	//ENTER
	 btnConfirmar = uiP.ButtonPadConfirmar(),
	
	 btnCancelar = uiP.ButtonPadCancelar(),
	
	 txfServicio = uiP.TextFieldServicio(),

	 lblServicio = uiP.LabelServicio();


	view.add(btnPad1);
	view.add(btnPad2);
	view.add(btnPad3);
	view.add(btnPad4);
	view.add(btnPad5);
	view.add(btnPad6);
	view.add(btnPad7);
	view.add(btnPad8);
	view.add(btnPad9);
	view.add(btnPad0);
	view.add(btnPadDel);
	view.add(btnConfirmar);
	view.add(btnCancelar);
	
	win.ButtonPad1 = btnPad1;
	win.ButtonPad2 = btnPad2;
	win.ButtonPad3 = btnPad3;
	win.ButtonPad4 = btnPad4;
	win.ButtonPad5 = btnPad5;
	win.ButtonPad6 = btnPad6;
	win.ButtonPad7 = btnPad7;
	win.ButtonPad8 = btnPad8;
	win.ButtonPad9 = btnPad9;
	win.ButtonPad0 = btnPad0;
	win.ButtonPadDel = btnPadDel;
	win.ButtonPadConfirmar = btnConfirmar;
	win.ButtonPadCancelar = btnCancelar;
	
	view2.add(txfServicio);
	win.TextFieldServicio = txfServicio;
	
	win.add(lblServicio);
	
	win.LabelServicio = lblServicio;
	
	win.add(view2);
	win.add(view);
	return win;
};
