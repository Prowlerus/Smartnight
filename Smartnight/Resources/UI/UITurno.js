exports.ContenedorModal = function() {

	var win1 = Titanium.UI.createWindow({
		backgroundColor : '#424344',
		//orientationModes : [Titanium.UI.PORTRAIT],
		layout : 'composite',
		modal : true,
		height : '80%',
		width : '50%',
	});
	return win1;
};
exports.BotonCerrar = function() {
	var btn = Titanium.UI.createButton({
		backgroundImage : '/images/PanelButton.png',      
        backgroundSelectedImage : '/images/PanelButtonOn.png',
		height : '6%', //Ti.Platform.displayCaps.platformHeight * 0.08,
		width : '20%', //Ti.Platform.displayCaps.platformWidth * 0.07,
		top : '93%',
		bottom : '1%',
		right : '50%',
		left : '40%',
		title : 'Cerrar',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		color : 'black',		
		borderRadius : 2,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,

	});
	return btn;
};
exports.LblUsuario = function() {
	var lblUsuario = Titanium.UI.createLabel({
        backgroundImage : '/images/InfoLabel2.png', 
		top : '10%',
		left : '10%',
		height : '8%',
		width : '30%',
		text : 'Usuario:',
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		},
		color : 'black',
		borderRadius : 2,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,

	});
	return lblUsuario;
};
exports.LblDatoUsuario = function() {
	var lbldatoUsuario = Titanium.UI.createLabel({
		backgroundImage : '/images/InfoLabel2.png', 
		top : '10%',
		left : '41%',
		height : '8%',
		width : '49%',
		text : 'Manolo',
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		},
		color : 'black',
		borderRadius : 2,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,	
	});
	return lbldatoUsuario;
};
exports.LblFechaInicio = function() {
	var lblFechaInicio = Titanium.UI.createLabel({
	    backgroundImage : '/images/InfoLabel2.png', 
		top : '19%',
		left : '10%',
		height : '8%',
		width : '30%',
		text : 'Fecha inicio:',
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		},
		color : 'black',
		borderRadius : 2,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,	
	});
	return lblFechaInicio;
};
exports.LblDatoFechaInicio = function() {
	var lblDatoFechaInicio = Titanium.UI.createLabel({
		backgroundImage : '/images/InfoLabel2.png', 
		top : '19%',
		left : '41%',
		height : '8%',
		width : '49%',
		text : '11/11/11 11:11:11',
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		},
		color : 'black',
		borderRadius : 2,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	
	});
	return lblDatoFechaInicio;
};
exports.LblFechaFin = function() {
	var lblFechaFin = Titanium.UI.createLabel({
	backgroundImage : '/images/InfoLabel2.png', 
		top : '28%',
		left : '10%',
		height : '8%',
		width : '30%',
		text : 'Fecha fin:',
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		},
		color : 'black',
		borderRadius : 2,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	
	});
	return lblFechaFin;
};
exports.LblDatoFechaFin = function() {
	var lblDatoFechaFin = Titanium.UI.createLabel({
		backgroundImage : '/images/InfoLabel2.png', 
		top : '28%',
		left : '41%',
		height : '8%',
		width : '49%',
		text : '--/--/-- --:--:--',
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		},
		color : 'black',
		borderRadius : 2,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	
	});
	return lblDatoFechaFin;
};
exports.LblImporte = function() {
	var lblImporte = Titanium.UI.createLabel({
		backgroundImage : '/images/InfoLabel2.png',        
		top : '37%',
		left : '10%',
		height : '8%',
		width : '30%',
		text : 'Importe vendido:',
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		},
		color : 'black',
		borderRadius : 2,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	
	});
	return lblImporte;
};
exports.LblDatoImporte = function() {
	var lblDatoImporte = Titanium.UI.createLabel({
		backgroundImage : '/images/InfoLabel2.png',             
		top : '37%',
		left : '41%',
		height : '8%',
		width : '49%',
		text : '$U 1.200',
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		},
		color : 'black',
		borderRadius : 2,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,	
	});
	return lblDatoImporte;
};
exports.ContenedorRegistros = function() {
	var contenedorComanda = Titanium.UI.createView({
		backgroundColor : '#424344',
		top : '51%',
		height : '40%',
		width : '80%',
		left : '10%',
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
	var tablaRegistros = Titanium.UI.createTableView({
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		top : '0%',
		right : '0%',
		left : '0%',
		borderRadius : 2,

	});
	contenedorComanda.add(tablaRegistros);
	contenedorComanda.tablaRegistros = tablaRegistros;
	return contenedorComanda;
};
exports.ContenedorCabezal = function() {
	var cabezaRegistros = Titanium.UI.createView({
		backgroundColor : '#424344',
		top : '46%',
		height : '5%',
		width : '80%',
		left : '10%',
		layout : 'composite',
		borderRadius : 2,
		/*backgroundGradient: {
        type: 'linear',
        startPoint: { x: '0%', y: '50%' },
        endPoint: { x: '100%', y: '50%' },
        colors: [ { color: '#424344', offset: 0.0}, { color: '#636363', offset: 0.25 }, { color: '#9d9da0', offset: 1.0 } ],
   		}*/
	});
	return cabezaRegistros;
};
exports.CabezaTablaResistros = function() {
	var cabezaTablaReg = Titanium.UI.createView({
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		top : 0,
		left : 0,
		backgroundColor : "#222222"
	});

	var nroMesa = Titanium.UI.createLabel({
		text : "Nro Mesa",
		color : "#FFFFFF",
		height : "auto",
		width : "auto",
		top : 3,
		left : 2,
		textAlign : "left",
		font : {
			fontSize : 15,
			fontWeight : 'bold'
		}
	});

	var hora = Titanium.UI.createLabel({
		text : "Hora",
		color : "#FFFFFF",
		height : "auto",
		width : "auto",
		top : 3,
		left : 230,
		textAlign : "left",
		font : {
			fontSize : 15,
			fontWeight : 'bold'
		}
	});
	var total = Titanium.UI.createLabel({
		text : "Importe",
		color : "#FFFFFF",
		height : "auto",
		width : "auto",
		top : 3,
		left : 451,
		textAlign : "left",
		font : {
			fontSize : 15,
			fontWeight : 'bold'
		}
	});

	cabezaTablaReg.add(nroMesa);
	cabezaTablaReg.add(hora);
	cabezaTablaReg.add(total);

	return cabezaTablaReg;
}; 