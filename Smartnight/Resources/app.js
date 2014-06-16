Ti.Android.currentActivity.setRequestedOrientation(Ti.Android.SCREEN_ORIENTATION_LANDSCAPE);
//Ti.Android.currentActivity.setRequestedOrientation(Ti.Android.SCREEN_ORIENTATION_PORTRAIT);

//Creacion de la Base de datos del sistema
var ObjetoDatabase = require('Database/Database');
ObjetoDatabase.CrearDatabase('dbSmartnight');

//db('dbSmartnight');

//Pruebas y datos de la Base de datos
/*var pruebas = require('DatosDePrueba');
pruebas.datosDePrueba();*/

//DATOS DE INICIALIZACION
var inicializacion = require('DatosInicializacion');
inicializacion.DatosInicio();


//Creo controlador y primer pantalla
var miControlador = require('Controlador/ControladorLogin');
miControlador.comenzarAplicacion(false);

//var miVistaLogin = require('Vista/LoginWindow').LoginWindow();
//miVistaLogin.open();

