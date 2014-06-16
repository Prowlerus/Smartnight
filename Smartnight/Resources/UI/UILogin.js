

exports.CrearVentana = function() {

	var win1 = Titanium.UI.createWindow({		
		title : 'Login',		
		//orientationModes : [Titanium.UI.PORTRAIT],
		backgroundColor : '#464c51',
		layout : 'vertical',		
		backgroundImage: '/images/inzoneback.png'		
	});	
	return win1;
};

exports.CrearVista1 = function() {
	var view1 = Titanium.UI.createView({
		backgroundColor : '#424344',
		top : '3%',
		height : '60%',
		width : '30%',
		layout : 'horizontal',
		borderRadius : 10

	});
	return view1;
};
exports.CrearVista2 = function() {
	var view2 = Titanium.UI.createView({
		backgroundColor : '#424344',
		top : '5%',
		height : '10%',
		width : '30%',
		layout : 'horizontal',
		borderRadius : 10
	
	});
	return view2;
};
// 1
exports.ButtonPad = function(num) {

	var btnPad = Titanium.UI.createButton({
		backgroundImage : '/images/PanelButton.png',		
		backgroundSelectedImage : '/images/PanelButtonOn.png',      //no soportado en ios, suck it steve!!
		height : '18.2%',
		width : '31.3%',
		top : '1%',
		bottom : '1%',
		right : '1%',
		left : '1%',
		title : num,
		font : {
			fontSize : 24,
			fontWeight : 'bold'
		},
		color : 'black',
		borderWidth : 6,
		borderColor : '#3a5d68',
		borderRadius : 10
		
	
   		
	});
	return btnPad;
};


// 0
exports.ButtonPad0 = function(num) {
	var btnPad0 = Titanium.UI.createButton({
		backgroundImage : '/images/PanelButton.png',      
        backgroundSelectedImage : '/images/PanelButtonOn.png',
		height : '18.2%',
		width : '48%',
		top : '1%',
		bottom : '1%',
		right : '1%',
		left : '1%',
		title : num,
		font : {
			fontSize : 24,
			fontWeight : 'bold'
		},
		color : 'black',
		borderWidth : 6,
		borderColor : '#3a5d68',
		borderRadius : 10,
		
	
	});
	return btnPad0;
};

// DELETE
exports.ButtonPadDel = function() {
	var btnPadDel = Titanium.UI.createButton({
		backgroundImage : '/images/PanelButton.png',      
        backgroundSelectedImage : '/images/PanelButtonOn.png',
		height : '18.2%',
		width : '48%',
		top : '1%',
		bottom : '1%',
		right : '1%',
		left : '1%',
		title : '<< DEL <<',
		font : {
			fontSize : 24,
			fontWeight : 'bold'
		},		
		color : 'black',
		borderWidth : 6,
		borderColor : '#3a5d68',
		borderRadius : 10
		
	});
	return btnPadDel;
};
//ENTER
exports.ButtonPadEnter = function() {
	var btnPadEnter = Titanium.UI.createButton({
		backgroundImage : '/images/PanelButton.png',      
        backgroundSelectedImage : '/images/PanelButtonOn.png',
		height : '18.2%',
		width : '98%',
		top : '1%',
		bottom : '1%',
		right : '1%',
		left : '1%',
		title : 'ENTER',
		font : {
			fontSize : 24,
			fontWeight : 'bold'
		},
		color : 'black',
		borderWidth : 6,
		borderColor : '#3a5d68',
		borderRadius : 10
		
	});
	return btnPadEnter;
};

// Textfield PIN
exports.TextFieldPin = function() {
	var txfPin = Titanium.UI.createTextField({
		width : '98%',
		top : '1%',
		bottom : '1%',
		right : '1%',
		left : '1%',
		color: '#000',
		backgroundColor: '#7cb1ba',	
		font : {
			fontSize : 40
		},
		backgroundGradient: {
        type: 'linear',
        startPoint: { x: '0%', y: '50%' },
        endPoint: { x: '100%', y: '50%' },
        colors: [ { color: '#7cb1ba', offset: 0.0}, { color: '#bedbe0', offset: 0.25 }, { color: '#7cb1ba', offset: 1.0 } ]
    },
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		verticalAlign : Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		passwordMask : true,
		enabled : false,
		maxLength : 4,
		borderColor : '#3a5d68',
		borderWidth : 6,			
		borderRadius : 10,
		softKeyboardOnFocus : Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS
	});
	return txfPin;
};
// Label Titulo
exports.LabelTitle = function() {
	var lblTitle = Titanium.UI.createLabel({
		width : '50%',
		top : '5%',
		font : {
			fontSize : 28
		},
		color : 'white',
		text : 'Introduzca su número PIN',
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	return lblTitle;	
};
