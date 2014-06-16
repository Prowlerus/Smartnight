exports.comenzarAplicacion = function(relog) {
	//db = require('/Database/UsuarioDatabase');
    var ControladorPrincipal = require('Controlador/ControladorPrincipal');
	// Listen for click events.
	var LoginWindow = require('/Vista/LoginWindow');
	var win = LoginWindow.LoginWindow();
    
    
	function btn1() {
		win.TextFieldPin.setValue(win.TextFieldPin.value + '1');
	};
	function btn2() {
		win.TextFieldPin.setValue(win.TextFieldPin.value + '2');
	};
	function btn3() {
		win.TextFieldPin.setValue(win.TextFieldPin.value + '3');
	};
	function btn4() {
		win.TextFieldPin.setValue(win.TextFieldPin.value + '4');
	};
	function btn5() {
		win.TextFieldPin.setValue(win.TextFieldPin.value + '5');
	};
	function btn6() {
		win.TextFieldPin.setValue(win.TextFieldPin.value + '6');
	};
	function btn7() {
		win.TextFieldPin.setValue(win.TextFieldPin.value + '7');
	};
	function btn8() {
		win.TextFieldPin.setValue(win.TextFieldPin.value + '8');
	};
	function btn9() {
		win.TextFieldPin.setValue(win.TextFieldPin.value + '9');
	};
	function btn0() {
		win.TextFieldPin.setValue(win.TextFieldPin.value + '0');
	};
	function btnDel() {
		win.TextFieldPin.setValue(win.TextFieldPin.value.slice(0, -1));
	};
	function btnEnter() {
      
		try {
			var pin = win.TextFieldPin.value;

			if (pin.length >= 4)//NO PERMITO CAMPO VACIO O MENOR A 4 DIGITOS
			{
				//CARGAMOS LOS DATOS DE LA BASE AL MODELO
				var servicioUsuario = require('/Servicio/ServicioUsuario');
				//EN ESTE CASO SOLO TRAERA UN USUARIO
				servicioUsuario.cargarDatosUnUsuario(pin);

				//AHORA TENGO LOS DATOS PARA USAR EN EL MODELO
				var modeloUsuario = require('/Modelo/ModeloUsuario');
				
				if (modeloUsuario.modelosUsuario[0].id !== null) {//SI ENCUENTRA EL USUARIO Y LO RETORNA
					//acá abrir ventana principal
					if(relog === true){
					    ControladorPrincipal.crearTurno();					    
					    win.close();
                        win = null; 
                        /*ControladorPrincipal = null;
                        LoginWindow = null;*/
					}
					else{        				
        				ControladorPrincipal.crearVentanaPrincipal();
        				win.close();
        				win = null;	      
        				/*ControladorPrincipal = null;
                        LoginWindow = null;  	*/				
					}			
				} else {
					throw {
						message : "El usuario no existe"
					};
				}

			} else {
				throw {
					message : "Introduzca un pin de 4 dígitos"
				};
			}
		} catch(e) {
			alert(e.message);
		}
	};

	win.ButtonPad1.addEventListener('click', btn1);
	win.ButtonPad2.addEventListener('click', btn2);
	win.ButtonPad3.addEventListener('click', btn3);
	win.ButtonPad4.addEventListener('click', btn4);
	win.ButtonPad5.addEventListener('click', btn5);
	win.ButtonPad6.addEventListener('click', btn6);
	win.ButtonPad7.addEventListener('click', btn7);
	win.ButtonPad8.addEventListener('click', btn8);
	win.ButtonPad9.addEventListener('click', btn9);
	win.ButtonPad0.addEventListener('click', btn0);
	win.ButtonPadDel.addEventListener('click', btnDel);
	win.ButtonPadEnter.addEventListener('click', btnEnter);

    win.orientationModes = [Titanium.UI.LANDSCAPE_LEFT];
	win.open();
};

