
//PREPARA EL ROW DE LINEA
exports.NombreProducto = function(nom) {
	var nombre = Titanium.UI.createLabel({
		text : nom,
		width : Ti.UI.SIZE,
		color : "#222222",
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		//backgroundSelectedColor : "#E39127",
		font : {
			fontSize : 20
		},
		touchEnabled : false
	});
	return nombre;
};
exports.CantidadProducto = function(cant) {
	var lblCant = Titanium.UI.createLabel({
		text : cant + 1,
		left : '5%',
		width : Ti.UI.SIZE,
		color : "#222222",
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	//	backgroundSelectedColor : "#E39127",
		font : {
			fontSize : 20
		},
		touchEnabled : false
	});
	return lblCant;
};
exports.CostoProductos = function(cant, precio) {
	var total = Titanium.UI.createLabel({
		text : " " + cant * precio + " ",
		width : Ti.UI.SIZE,
		right : '1%',
		color : "#222222",
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	//	backgroundSelectedColor : "#E39127",
		font : {
			fontSize : 20
		},
		touchEnabled : false
	});
	return total;
};
exports.IdProducto = function(id) {
	var idProd = Titanium.UI.createLabel({
		text : id,
		height : 60,
		width : "auto",
		bottom : 0,
		left : 10,
		color : "#FFF",
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#AC000B",
		font : {
			fontSize : 20
		},
		touchEnabled : false,
		zIndex : 200,
		visible : false
	});
	return idProd;
};
exports.CrearRow = function(id, nombre, tablaId, cant, precio) {
	var row = Titanium.UI.createTableViewRow({
		height : "auto",
		backgroundColor : "#d2dbe0",
		backgroundSelectedColor : "#9fc1c6",
		itemId : id,
		itemTitle : nombre,
		tablaId : tablaId,
		cantidad : cant,
		precio : precio,	
		backgroundGradient: {
        type: 'linear',
        startPoint: { x: '0%', y: '50%' },
        endPoint: { x: '100%', y: '50%' },
        colors: [ { color: '#e3adf4', offset: 0.0}, { color: '#636363', offset: 0.25 }, { color: '#e3adf4', offset: 1.0 } ],
   		}	
		
	});
	return row;
};
exports.DialogoOpciones = function() {
	var opciones = Ti.UI.createOptionDialog({
		cancel : 2,
		options : ["Borrar", "Modificar", "Cancelar"],
		selectedIndex : 0,
		destructive : 0
	});
	return opciones;
};
exports.DialogoOpcionesSiNO = function() {
	var opciones = Ti.UI.createOptionDialog({
		cancel : 1,
		options : ["Si", "No"],
		selectedIndex : 0,
		destructive : 0
	});
	return opciones;
};
//*********************VENTANA-WIN-MODIF LINEA DE COMANDA********************************************************
exports.ContenedorModal = function() {

	var win1 = Titanium.UI.createWindow({
		backgroundColor : '#424344',
		//orientationModes : [Titanium.UI.PORTRAIT],
		layout : 'composite',
		modal : true,
		height : '50%',
		width : '50%',
	});
	return win1;
};
exports.BotonAceptar = function() {
	var btn = Titanium.UI.createButton({
		backgroundImage : '/images/PanelButton.png',      
        backgroundSelectedImage : '/images/PanelButtonOn.png',
		height : Ti.Platform.displayCaps.platformHeight * 0.12,
		width : Ti.Platform.displayCaps.platformWidth * 0.13,
		top : '70%',
		bottom : '1%',		
		left : '10%',
		title : 'Aceptar',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		color : 'black',		
		borderRadius : 2,
		nombre : 0,
		cantidad : 0,
		idProd : 0,
		precio : 0,
		tablaId : 0
	});
	return btn;
};
exports.BotonCancelar = function() {
	var btn = Titanium.UI.createButton({
		backgroundImage : '/images/PanelButton.png',      
        backgroundSelectedImage : '/images/PanelButtonOn.png',
		height : Ti.Platform.displayCaps.platformHeight * 0.12,
		width : Ti.Platform.displayCaps.platformWidth * 0.13,
		top : '70%',
		bottom : '1%',
		right : '10%',
	
		title : 'Cancelar',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		color : 'black',
	    borderRadius : 2
	});
	return btn;
};
exports.Mensaje = function(texto) {
	var lblmsg = Titanium.UI.createLabel({
		backgroundImage : '/images/InfoLabel.png', 
		top : '1%',
		left : '10%',
		height : '8%',
		width : '80%',
		text : texto,
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		},
		color : 'black',
		borderRadius : 2,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		
	});
	return lblmsg;
};
exports.CrearPicker = function() {
	var picker, data = [];
	    picker = Titanium.UI.createPicker({
		top : '30%',
		left : '45%'
	});
	for ( i = 1; i < 21; i++) {
		data[i] = Ti.UI.createPickerRow({
			title : i
		});
		picker.add(data[i]);
		//agregar de a 1 pporque si le pasas el data[] no funta
	}
	picker.selectionIndicator = true;
	return picker;
}; 
//******************************************** ROWS INFORME TURNO*****************************
exports.NroServicio = function(nroServ) {
	var lblServ = Titanium.UI.createLabel({
		text : nroServ,
		width : Ti.UI.SIZE,
		color : "#222222",
		left : 2,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	//	backgroundSelectedColor : "#E39127",
		font : {
			fontSize : 20
		},
		touchEnabled : false
	});
	return lblServ;
};
exports.lblFecha = function(fecha) {
	var labelFecha = Titanium.UI.createLabel({
		text : fecha,
		width : Ti.UI.SIZE,
		left : 155,
		color : "#222222",
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	//	backgroundSelectedColor : "#E39127",
		font : {
			fontSize : 20
		},
		touchEnabled : false
	});
	return labelFecha;
};
exports.lblTotal = function(total) {
	var labelTotal = Titanium.UI.createLabel({
		text : total,
		width : Ti.UI.SIZE,
		left : 465,
		color : "#222222",
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		font : {
			fontSize : 20
		},
		touchEnabled : false,
				
	});
	return labelTotal;
};
exports.CrearRowInfoComanda = function(NroServ, fecha, total) {
	var rowDos = Titanium.UI.createTableViewRow({
		height : 30,
		backgroundColor : "#d2dbe0",
		backgroundSelectedColor : "#9fc1c6",
		servicio : NroServ,		
		fecha : fecha,
		total : total,	
		backgroundGradient: {
        type: 'linear',
        startPoint: { x: '0%', y: '50%' },
        endPoint: { x: '100%', y: '50%' },
        colors: [ { color: '#e3adf4', offset: 0.0}, { color: '#636363', offset: 0.25 }, { color: '#e3adf4', offset: 1.0 } ],
   		}	
		
	});
	return rowDos;
};