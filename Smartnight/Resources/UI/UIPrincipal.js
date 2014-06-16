//*********************---CONTENEDORES---***************************

//CONTENTEDOR VENTANA PRINCIPAL

exports.ContenedorPrincipal = function() {

	var win1 = Titanium.UI.createWindow({
		backgroundColor : '#464c51',
		//orientationModes : [Titanium.UI.PORTRAIT],
		layout : 'composite',
		backgroundImage : '/images/inzoneback.png',

	});
	return win1;
};
//CONTENEDOR BARRA DE ESTADO
exports.BarraEstado = function() {
	var vistaBarraEstado = Titanium.UI.createView({
		backgroundColor : '#424344',
		top : '1%',
		left : '1%',
		right : '1%',
		height : '5%',
		width : '98%',
		layout : 'composite',
		borderRadius : 2,
		backgroundGradient : {
			type : 'linear',
			startPoint : {
				x : '0%',
				y : '50%'
			},
			endPoint : {
				x : '100%',
				y : '50%'
			},
			colors : [{
				color : '#424344',
				offset : 0.0
			}, {
				color : '#636363',
				offset : 0.25
			}, {
				color : '#9d9da0',
				offset : 1.0
			}],
		}
	});
	return vistaBarraEstado;
};

//CONTENEDOR DE LISTA DE COMANDAS
exports.ContenedorTablaComandas = function() {
	var contenedorTablaComandas = Titanium.UI.createView({
		backgroundColor : '#424344',
		top : '6%',
		left : '1%',
		bottom : '1%',
		height : '93%',
		width : '10%',
		layout : 'vertical',
		borderRadius : 2,
		backgroundGradient : {
			type : 'linear',
			startPoint : {
				x : '0%',
				y : '50%'
			},
			endPoint : {
				x : '100%',
				y : '50%'
			},
			colors : [{
				color : '#424344',
				offset : 0.0
			}, {
				color : '#636363',
				offset : 0.25
			}, {
				color : '#9d9da0',
				offset : 1.0
			}],
		}
	});
	return contenedorTablaComandas;
};

//CONTENEDOR SECTOR COMANDA
exports.ContenedorCabezaComanda = function() {
	var cabezaComanda = Titanium.UI.createView({
		backgroundColor : '#424344',
		top : '6%',
		height : '4%', //77
		width : '29.3%',
		left : '11.3%',
		layout : 'composite',
		borderRadius : 2,
		backgroundGradient : {
			type : 'linear',
			startPoint : {
				x : '0%',
				y : '50%'
			},
			endPoint : {
				x : '100%',
				y : '50%'
			},
			colors : [{
				color : '#424344',
				offset : 0.0
			}, {
				color : '#636363',
				offset : 0.25
			}, {
				color : '#9d9da0',
				offset : 1.0
			}],
		}
	});
	return cabezaComanda;
};
exports.ContenedorComanda = function() {
	var contenedorComanda = Titanium.UI.createView({
		backgroundColor : '#424344',
		top : '10%',
		height : '70%', //77
		width : '29.3%',
		left : '11.3%',
		layout : 'composite',
		borderRadius : 2,
		backgroundGradient : {
			type : 'linear',
			startPoint : {
				x : '0%',
				y : '50%'
			},
			endPoint : {
				x : '100%',
				y : '50%'
			},
			colors : [{
				color : '#424344',
				offset : 0.0
			}, {
				color : '#636363',
				offset : 0.25
			}, {
				color : '#9d9da0',
				offset : 1.0
			}],
		}
	});
	return contenedorComanda;
};
exports.ContenedorPieComanda = function() {
	var cabezaComanda = Titanium.UI.createView({
		backgroundColor : '#424344',
		top : '80%',
		height : '4%', //77
		width : '29.3%',
		left : '11.3%',
		layout : 'composite',
		borderRadius : 2,
		backgroundGradient : {
			type : 'linear',
			startPoint : {
				x : '0%',
				y : '50%'
			},
			endPoint : {
				x : '100%',
				y : '50%'
			},
			colors : [{
				color : '#424344',
				offset : 0.0
			}, {
				color : '#636363',
				offset : 0.25
			}, {
				color : '#9d9da0',
				offset : 1.0
			}],
		}
	});
	return cabezaComanda;
};

//CONTENEDOR DE OPCIONES DE COMANDA
exports.ContenedorOpcionesComanda = function() {
	var contenedorOpcionesComanda = Titanium.UI.createView({
		backgroundColor : '#424344',
		//bottom : '1%',
		top : '84%',
		left : '11.3%',
		height : '15%',
		width : '29.3%',
		layout : 'composite',
		borderRadius : 2,
		backgroundGradient : {
			type : 'linear',
			startPoint : {
				x : '0%',
				y : '50%'
			},
			endPoint : {
				x : '100%',
				y : '50%'
			},
			colors : [{
				color : '#424344',
				offset : 0.0
			}, {
				color : '#636363',
				offset : 0.25
			}, {
				color : '#9d9da0',
				offset : 1.0
			}],
		}
	});
	return contenedorOpcionesComanda;
};
//CONTENEDOR GLOBAL PRODUCTOS Y CATEGORIAS
exports.ContenedorGlobalPC = function() {

	var contenedorGlobalPC = Titanium.UI.createView({
		backgroundColor : '#424344',
		top : '6%', //Ti.Platform.displayCaps.platformWidth*0.8
		height : '93%',
		right : '1%',
		width : '58.1%',
		//layout : 'horizontal',
		//		contentHeight: 'auto',
		//	scrollType : 'horizontal',
		borderRadius : 2,
		backgroundGradient : {
			type : 'linear',
			startPoint : {
				x : '0%',
				y : '50%'
			},
			endPoint : {
				x : '100%',
				y : '50%'
			},
			colors : [{
				color : '#424344',
				offset : 0.0
			}, {
				color : '#636363',
				offset : 0.25
			}, {
				color : '#9d9da0',
				offset : 1.0
			}],
		}

	});
	return contenedorGlobalPC;
};

//CONTENEDOR DE PRODUCTOS

exports.ContenedorProductos = function() {

	var contenedorProductos = Titanium.UI.createScrollView({
		backgroundColor : '#424344',
		top : '1%', //Ti.Platform.displayCaps.platformWidth*0.8
		right : '1%',
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,

		layout : 'horizontal',
		//		contentHeight: 'auto',
		//	scrollType : 'horizontal',
		borderRadius : 2,
		backgroundGradient : {
			type : 'linear',
			startPoint : {
				x : '0%',
				y : '50%'
			},
			endPoint : {
				x : '100%',
				y : '50%'
			},
			colors : [{
				color : '#424344',
				offset : 0.0
			}, {
				color : '#636363',
				offset : 0.25
			}, {
				color : '#9d9da0',
				offset : 1.0
			}],
		}

	});
	return contenedorProductos;
};

// CONTENEDOR DE CATEGORIAS

exports.ContenedorCategorias = function() {
	var contenedorCategorias = Titanium.UI.createScrollView({
		backgroundColor : '#424344',
		top : '1%',
		right : '1%',
		bottom : '1%',
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,

		layout : 'horizontal',
		//scrollType : 'horizontal',
		//horizontalWrap : 'False',
		borderRadius : 2,
		backgroundGradient : {
			type : 'linear',
			startPoint : {
				x : '0%',
				y : '50%'
			},
			endPoint : {
				x : '100%',
				y : '50%'
			},
			colors : [{
				color : '#424344',
				offset : 0.0
			}, {
				color : '#636363',
				offset : 0.25
			}, {
				color : '#9d9da0',
				offset : 1.0
			}],
		}
	});
	return contenedorCategorias;
};

//---------------------------------------------------------------------------------------------------------

//*********************---VISTAS---***************************

//LIST VIEW LISTA COMANDAS
exports.CabezaTabla = function() {
	var CabezaDeTabla = Titanium.UI.createView({
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		//top: 0,
		//left: 0,
		backgroundColor : "#222222",
		layout : 'composite'
	});

	var cantidadLabel = Titanium.UI.createLabel({
		text : "Cantidad",
		color : "#d3ffdd",
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		left : '1%',
		font : {
			fontSize : 15,
			fontWeight : 'bold'
		}
	});

	var itemLabel = Titanium.UI.createLabel({
		text : "Producto",
		color : "#d3ffdd",
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		font : {
			fontSize : 15,
			fontWeight : 'bold'
		}
	});

	var totalItemLabel = Titanium.UI.createLabel({
		text : "Precio",
		color : "#d3ffdd",
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		right : '1%',
		font : {
			fontSize : 15,
			fontWeight : 'bold'
		}
	});

	CabezaDeTabla.add(cantidadLabel);
	CabezaDeTabla.add(itemLabel);
	CabezaDeTabla.add(totalItemLabel);
	return CabezaDeTabla;
};
exports.PieTabla = function() {
	var PieDeTabla = Titanium.UI.createView({
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		backgroundColor : "#222222"
	});

	var totaldLabel = Titanium.UI.createLabel({
		text : "Total:",
		color : "#d3ffdd",
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		left : '1%',
		font : {
			fontSize : 15,
			fontWeight : 'bold'
		}
	});

	var importe = Titanium.UI.createLabel({
		text : "$ 0",
		color : "#d3ffdd",
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		right : '1%',
		font : {
			fontSize : 15,
			fontWeight : 'bold'
		}
	});

	PieDeTabla.add(totaldLabel);
	PieDeTabla.add(importe);
	PieDeTabla.importe = importe;

	return PieDeTabla;
};
exports.TableViewComandas = function() {

	var tvListaComandas = Titanium.UI.createTableView({
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		top : '1%',
		right : '1%',
		left : '1%',
		borderRadius : 2,
		backgroundcolor : '#a5a0ba',
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	return tvListaComandas;
};

exports.ComandasTableViewRow = function(serv) {
	var row = Titanium.UI.createTableViewRow({
		title : 'Mesa Nro: ' + serv,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		color : '#d3ffdd',
		backgroundColor : '#655c6d',
		backgroundSelectedColor : '#2f3154',
		idRow : serv
	});
	return row;
};

//VIEW COMANDA

exports.TableComanda = function(nroMesa) {

	var tvComanda = Titanium.UI.createTableView({
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		top : '0%',
		right : '0%',
		left : '0%',
		//bottom: '1%',
		borderRadius : 2,
		idMesa : nroMesa,
		rowaBorrar : 0, //NO BORRAR ATRIBUTO
		idaBorrar : 0, //NO BORRAR ATRIBUTO
		nomProd : "", //NO BORRAR ATRIBUTO
		cantidad : 0, //NO BORRAR ATRIBUTO
		precio : 0, //NO BORRAR ATRIBUTO
		total : 0,//NO BORRAR ATRIBUTO

	});

	return tvComanda;
};

//*********************---BOTONES---**************************

//BOTON CATEGORIA

exports.ButtonCat = function(categoria, id, color) {

	var btnCat = Titanium.UI.createButton({
		backgroundColor : '#' + color,
		backgroundSelectedColor : '#bedbe0', //no soportado en ios, suck it steve!!
		height : Ti.Platform.displayCaps.platformHeight * 0.15,
		width : Ti.Platform.displayCaps.platformWidth * 0.133, //'31%',
		top : '1%',
		bottom : '1%',
		right : '1%',
		left : '1%',
		title : categoria,
		id : id, //id utilizada como closure para guardar valor de context
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		color : 'black',
		borderWidth : 6,
		borderColor : '#3a5d68',
		borderRadius : 2
	});
	return btnCat;
};

// BOTON PRODUCTO

exports.ButtonProd = function(producto, id) {

	var btnPro = Titanium.UI.createButton({
		id : id,
		backgroundImage : '/images/PanelButton.png',      
        backgroundSelectedImage : '/images/PanelButtonOn.png',
		height : Ti.Platform.displayCaps.platformHeight * 0.15,
		width : Ti.Platform.displayCaps.platformWidth * 0.133, // No se porque si uso % lo aplica sobre el contentWidth/Height y se deforman...en teoria el width es otra property
		top : '1%',
		bottom : '1%',
		right : '1%',
		left : '1%',
		title : producto,
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		color : 'black',
		
		borderRadius : 2
	});
	return btnPro;
};

//BOTON PRODUCTO BACK

exports.ButtonProdBack = function() {

	var btnProBack = Titanium.UI.createButton({
		backgroundImage : '/images/BackButton.png',      
        backgroundSelectedImage : '/images/BackButtonOn.png',
		height : Ti.Platform.displayCaps.platformHeight * 0.15,
		width : Ti.Platform.displayCaps.platformWidth * 0.133, // No se porque si uso % lo aplica sobre el contentWidth/Height y se deforman...en teoria el width es otra property
		top : '1%',
		bottom : '1%',
		right : '1%',
		left : '1%',
		title : '<< Categorías <<',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},	
		
		borderRadius : 2
	});
	return btnProBack;
};

//BOTON NUEVA COMANDA

exports.ButtonNuevaComanda = function() {

	var btnNuevaComanda = Titanium.UI.createButton({
		backgroundImage : '/images/NuevaButton.png',      
        backgroundSelectedImage : '/images/NuevaButtonOn.png', //no soportado en ios, suck it steve!!
		height : '10%', // '31%',
		width : Ti.UI.FILL, //'31%',
		top : '1%',
		bottom : '1%',
		right : '1%',
		left : '1%',
		title : 'Nueva comanda',
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		},
		color : 'black',
		//borderWidth : 6,
	//	borderColor : '#3a5d68',
		borderRadius : 2
	});
	return btnNuevaComanda;
};


exports.ButtonCodigo = function() {

	var btnCodigo = Titanium.UI.createButton({
		backgroundImage : '/images/PanelButton.png',      
        backgroundSelectedImage : '/images/PanelButtonOn.png',
		height : Ti.UI.FILL,
		width : '20%',
		left : '21%',
		title : 'Ingresar código',
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		},
		color : 'black',
		//borderWidth : 6,
		//borderColor : '#3a5d68',
		borderRadius : 2
	});
	return btnCodigo;
};


//BOTON CERRAR COMANDA

exports.ButtonCerrarComanda = function() {

	var btnCerrarCom = Titanium.UI.createButton({
		backgroundImage : '/images/ConfirmarButton.png',      
        backgroundSelectedImage : '/images/ConfirmarButtonOn.png',
		height : '98%',
		width : '48%',
		top : '1%',
		bottom : '1%',
		right : '1%',
		title : 'Cerrar Comanda',
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		},
		color : 'black',
		//borderWidth : 6,
		//borderColor : '#3a5d68',
		borderRadius : 2
	});
	return btnCerrarCom;
};

//BOTON ELIMINAR COMANDA

exports.ButtonEliminarComanda = function() {

	var btnEliminarCom = Titanium.UI.createButton({
		backgroundImage : '/images/EliminarComanda.png',      
        backgroundSelectedImage : '/images/EliminarComandaOn.png',
		height : '98%',
		width : '48%',
		top : '1%',
		bottom : '1%',
		left : '1%',
		title : 'Eliminar Comanda',
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		},
		color : 'black',
		//borderWidth : 6,
		//borderColor : '#3a5d68',
		borderRadius : 2
	});
	return btnEliminarCom;
};



//BOTON CONFIRMAR COMANDA

exports.ButtonPadConfirmar = function() {
	var btnPadConfirmar = Titanium.UI.createButton({
		backgroundImage : '/images/PanelButton.png',      
        backgroundSelectedImage : '/images/PanelButtonOn.png',
		height : '18.2%',
		width : '48%',
		top : '1%',
		bottom : '1%',
		right : '1%',
		left : '1%',
		title : 'Confirmar',
		font : {
			fontSize : 24,
			fontWeight : 'bold'
		},
		color : 'black',
		borderWidth : 6,
		borderColor : '#3a5d68',
		borderRadius : 2
		/*backgroundGradient: {
		 type: 'linear',
		 startPoint: { x: '50%', y: '0%' },
		 endPoint: { x: '50%', y: '100%' },
		 colors: [ { color: '#7cb1ba', offset: 0.0}, { color: '#7cb1ba', offset: 0.25 }, { color: '#434c4f', offset: 1.0 } ],
		 }*/
	});
	return btnPadConfirmar;
};

exports.ButtonPadCancelar = function() {
	var btnPadCancelar = Titanium.UI.createButton({
		backgroundImage : '/images/PanelButton.png',      
        backgroundSelectedImage : '/images/PanelButtonOn.png',
		height : '18.2%',
		width : '48%',
		top : '1%',
		bottom : '1%',
		right : '1%',
		left : '1%',
		title : 'Cancelar',
		font : {
			fontSize : 24,
			fontWeight : 'bold'
		},
		color : 'black',
		borderWidth : 6,
		borderColor : '#3a5d68',
		borderRadius : 2
		
	});
	return btnPadCancelar;
};

//*********************---LABELS---**************************

//LABEL GLOBAL PC TITULO
exports.LabelGPCTitulo = function(titulo) {
	var lblGPCT = Titanium.UI.createLabel({

		height : '8%',
		width : '20%',
		top : '1%',
		//left: '1%',
		text : titulo,
		font : {
			fontSize : 22,
			fontWeight : 'bold'
		},
		color : 'white',
		borderRadius : 2,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	return lblGPCT;
};

//LABEL USUARIO LOGUEADO
exports.LabelUsuarioLog = function(usuarioNombre) {

	var lblUsuarioLog = Titanium.UI.createLabel({
		backgroundImage : '/images/PanelButton.png',      
        backgroundSelectedImage : '/images/PanelButtonOn.png',
		height : Ti.UI.FILL,
		left : 0,
		width : '20%',
		text : 'Usuario: ' + usuarioNombre,
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		},
		color : 'black',
		borderRadius : 2,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		
	});
	return lblUsuarioLog;
};

// MODAL WINDOW SERVICIO

exports.ModalServicio = function() {

	var winM = Titanium.UI.createWindow({
		backgroundColor : '#464c51',
		height : '80%',
		width : '40%',
		top : '5',
		layout : 'vertical',
		modal : true,
		borderRadius : 2

	});
	return winM;
};

exports.TextFieldServicio = function() {
	var txfServ = Titanium.UI.createTextField({
		width : Ti.UI.FILL,
		top : '1%',
		bottom : '1%',
		right : '1%',
		left : '1%',
		color : '#000',
		backgroundColor : '#7cb1ba',
		font : {
			fontSize : 28
		},
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		verticalAlign : Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		maxLength : 6,
		borderColor : '#3a5d68',
		borderWidth : 6,
		borderRadius : 2,
		softKeyboardOnFocus : Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS
	});
	return txfServ;
};

exports.VistaServicio = function() {
	var viewServ = Titanium.UI.createView({
		backgroundColor : '#424344',
		top : '3%',
		height : '80%',
		width : '80%',
		layout : 'horizontal',
		borderRadius : 2

	});
	return viewServ;
};
exports.VistaServicio2 = function() {
	var viewServ2 = Titanium.UI.createView({
		backgroundColor : '#424344',
		top : '5%',
		height : '10%',
		width : '80%',
		layout : 'horizontal',
		borderRadius : 2

	});
	return viewServ2;
};

exports.LabelServicio = function() {
	var lblServicio = Titanium.UI.createLabel({
		width : '80%',
		top : '5%',
		font : {
			fontSize : 28
		},
		color : 'white',
		text : 'Introduzca el número de mesa',
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	return lblServicio;
};

//---------------------------------
/*exports.ContenedorModalCodigo = function() {

	var win1 = Titanium.UI.createWindow({
		backgroundColor : '#424344',
		//orientationModes : [Titanium.UI.PORTRAIT],
		layout : 'composite',
		modal : true,
		height : '15%',
		width : '70%',
	});
	return win1;
};
exports.TextFieldCodigo = function() {
	var txfCod = Titanium.UI.createTextField({
		height : '95%',
		width : '60%',
		top : '0%',
		bottom : '1%',
		left : '1%',
		color: '#000',
		backgroundColor: '#7cb1ba',	
		font : {
			fontSize : 40
		},
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		verticalAlign : Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		borderColor : '#3a5d68',
		borderWidth : 6,			
		borderRadius : 10,
		//softKeyboardOnFocus : Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS
	});
	return txfCod;
};
exports.ButtonCodigoCanjear = function() {
	var btnCod = Titanium.UI.createButton({
		backgroundImage : '/images/PanelButton.png',      
        backgroundSelectedImage : '/images/PanelButtonOn.png',
		height : '95%',
		width : '20%',
		top : '1%',
		bottom : '1%',
		right : '21%',
		title : 'Canjear',
		font : {
			fontSize : 24,
			fontWeight : 'bold'
		},
		color : 'black',
		borderWidth : 6,
		borderColor : '#3a5d68',
		borderRadius : 2,
		codigo : 0,
		
	});
	return btnCod;
};
exports.ButtonCancelCodigo = function() {
	var btnCancelarCodigo = Titanium.UI.createButton({
		backgroundImage : '/images/PanelButton.png',      
        backgroundSelectedImage : '/images/PanelButtonOn.png',
		height : '95%',
		width : '20%',
		top : '1%',
		bottom : '1%',
		right : '1%',
		title : 'Cancelar',
		font : {
			fontSize : 24,
			fontWeight : 'bold'
		},
		color : 'black',
		borderWidth : 6,
		borderColor : '#3a5d68',
		borderRadius : 2
		
	});
	return btnCancelarCodigo;
};
*/



//INDICADOR DE SINCRONIZACION


exports.IndicadorSincro = function() {
    var progressIndicator = Ti.UI.Android.createProgressIndicator({
        message : 'Sincronizando bases de datos. Aguarde un momento por favor...',
        location : Ti.UI.Android.PROGRESS_INDICATOR_DIALOG,
        type : Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT  
    });
 
    return progressIndicator;
};





