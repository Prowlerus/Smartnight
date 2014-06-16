exports.LoginWindow = function() {
	var ui = require('UI/UILogin');

	var win1 = ui.CrearVentana();
	var view = ui.CrearVista1();
	var view2 = ui.CrearVista2();	
	// 1
	var btnPad1 = ui.ButtonPad('1');
	// 2
	var btnPad2 = ui.ButtonPad('2');
	// 3
	var btnPad3 = ui.ButtonPad('3');
	// 4
	var btnPad4 = ui.ButtonPad('4');
	// 5
	var btnPad5 = ui.ButtonPad('5');
	// 6
	var btnPad6 = ui.ButtonPad('6');
	// 7
	var btnPad7 = ui.ButtonPad('7');
	// 8
	var btnPad8 = ui.ButtonPad('8');
	// 9
	var btnPad9 = ui.ButtonPad('9');
	// 0
	var btnPad0 = ui.ButtonPad0('0');
	// DELETE
	var btnPadDel = ui.ButtonPadDel();
	//ENTER
	var btnPadEnter = ui.ButtonPadEnter();

	// Textfield PIN
	var txfPin = ui.TextFieldPin();

	var lblTitle = ui.LabelTitle();

	// VIEW
	//view.add(txfPin);//l
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
	view.add(btnPadEnter);

	//VIEW2
	view2.add(txfPin);

	// WINDOW
	win1.add(lblTitle);
	win1.add(view2);
	win1.add(view);
	//Asigno componentes
	win1.ButtonPad1 = btnPad1;
	win1.ButtonPad2 = btnPad2;
	win1.ButtonPad3 = btnPad3;
	win1.ButtonPad4 = btnPad4;
	win1.ButtonPad5 = btnPad5;
	win1.ButtonPad6 = btnPad6;
	win1.ButtonPad7 = btnPad7;
	win1.ButtonPad8 = btnPad8;
	win1.ButtonPad9 = btnPad9;
	win1.ButtonPad0 = btnPad0;
	win1.ButtonPadDel = btnPadDel;
	win1.ButtonPadEnter = btnPadEnter;
	win1.TextFieldPin = txfPin;

	// llamo Controller
	
	//var ControladorLogin = require('/Controlador/ControladorLogin');
    //new ControladorLogin.CrearControlador(win1);
	// RETORNO OBJETO WINDOW
	return win1;
};

