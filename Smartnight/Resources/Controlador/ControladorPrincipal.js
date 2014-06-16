//VARIABLES GLOBALES
var VentanaPrincipal = require('Vista/PrincipalWindow'), ui2 = require('Vista/ModalWindowServicio'), ui = require('UI/UIPrincipal'), uic = require('/UI/UIComanda'), win = VentanaPrincipal
		.PrincipalWindow(),

comandaModelo = require('/Modelo/ModeloComanda'), productoModelo = require('/Modelo/ModeloProducto'), usuarioModelo = require('/Modelo/ModeloUsuario'), turnoModelo = require('/Modelo/ModeloTurno'), servicioTurno = require('/Servicio/ServTurno'), servicioProductos = require('/Servicio/ServCategoriaProducto'),

utiles = require('/Utilidades/Utiles');

// uic = require('/UI/UIComanda');

exports.crearVentanaPrincipal = function() {

	// Verifico que no exista turno o tomo turno que exista
	if (servicioTurno.existeTurno() === false) {
		// SINO existe un turno activo .... Creo el turno
		turnoModelo.setTurno(usuarioModelo.modelosUsuario[0].nombre,
				Titanium.Platform.id);
		// Guardo TURNO BD 1 es boolean true activo
		servicioTurno.guardarTurno(turnoModelo.fechaInicio,
				turnoModelo.fechaInicio, 1, 0,
				usuarioModelo.modelosUsuario[0].id, turnoModelo.dispositivo);
	}

	// win.BarraEstado.LabelUsuarioLog.setText('Usuario: ' +
	// usuario.modelosUsuario[0].nombre);
	//win.BarraEstado.LabelUsuarioLog.setText('Usuario: ' + turnoModelo.usuario);

	// cargo Contendedores
	cargarContenedores();

	// ASIGNO ACCION A BOTON CREAR COMANDA
	win.ContenedorTablaComandas.ButtonNuevaComanda.addEventListener('click',
			abrirComanda);
	// Asigno accion a boton info de turno
	win.BarraEstado.LabelUsuarioLog.addEventListener('click', mostrarInfoTurno);
	// Asigno accion al boton sincronizar
	// win.BarraEstado.ButtonSincronizar.addEventListener('click',
	// confirmarSincronizar);
	// Asigno accion al boton codigo
	//win.BarraEstado.ButtonCodigo.addEventListener('click', canjearCodigo);
	// ASIGNO ACCION A BOTON ELIMINAR
	win.ContenedorOpcionesComanda.ButtonEliminarComanda.addEventListener(
			'click', confirmarEliminar);

	// COMANDA GENERAL
	crearComanda('Fast');

	// ASIGNO ACCION AL BOTON CERRAR COMANDA
	win.ContenedorOpcionesComanda.ButtonCerrarComanda.addEventListener('click',
			confirmarCerrarComanda);

	// MENU
	var activity = win.activity;

	activity.onCreateOptionsMenu = function(e) {
		var salir, menu = e.menu,
		// CERRAR TURNO
		cerrarTurno = menu.add({
			title : "Cerrar Turno",
			// icon: "item1.png",
			showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
		});
		cerrarTurno.addEventListener("click", function(e) {
			confirmarCerrarTurno();
		});

		// SALIDA
		/*
		 * salir = menu.add({ title : "Salir", // icon: "item1.png",
		 * showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM });
		 * salir.addEventListener("click", function(e) {
		 * 
		 * confirmarSalir(confirmarSincronizar); });
		 */

	};
	
    win.orientationModes = [Titanium.UI.LANDSCAPE_LEFT];
	win.open();
	confirmarSincronizar(false);
};

function cargarContenedores() {
	// cargo nuevamente los productos
	servicioProductos.cargarProductos();
	
	//ACTUALIZO USUARIO DEL TURNO
    win.BarraEstado.LabelUsuarioLog.setText('Usuario: ' + turnoModelo.usuario);
    
    
	win.ContenedorGlobalPC.ContenedorCategorias.removeAllChildren();

	var servicioCategoria, i, categoriaId, categoriaNombre, catbtn;

	// CARGO CATEGORIAS EN EL MODELO
	servicioCategoria = require('/Servicio/ServCategoriaProducto');
	servicioCategoria.cargarCategorias();

	// OBTENGO CATEGORIAS DEL MODELO
	misCategorias = require('/Modelo/ModeloCategoria');
	// DEFAULT CATEGORIAS
	// mostrarCategorias();

	for (i = 0; i < misCategorias.modelosCategoria.length; i++) {

		categoriaId = misCategorias.modelosCategoria[i].categoriaId;
		categoriaNombre = misCategorias.modelosCategoria[i].nombre;
		categoriaColor = misCategorias.modelosCategoria[i].color;
		

		catbtn = ui.ButtonCat(categoriaNombre, categoriaId, categoriaColor);
		// paso la categoria id al objeto para luego utilizarla como parametro
		// para eventos

		catbtn.addEventListener('click', function(e) {// BOTONES DE CATEGORIA

			mostrarProductos(e.source.id, e.source.title);
			// Utilizo una variable guardada en el objeto como closure para que
			// me guarde los valores del contexto de afuera
			// o le mando el row directamente
		});
		// lo agrego a la vista
		win.ContenedorGlobalPC.ContenedorCategorias.add(catbtn);

	}
	// fin del for

};

function mostrarProductos(categoriaId, categoriaNombre) {

	win.ContenedorGlobalPC.ContenedorProductos.removeAllChildren();
	// LIMPIO VENTANA Y REMUEVO LO QUE TENIA

	var i, productoId, productoNombre, productoPrecio, prodbtn, productosDeCategoria = productoModelo
			.productoPorCategoria(categoriaId),
	// boton return
	btnProdBack = ui.ButtonProdBack();
	win.ContenedorGlobalPC.ContenedorProductos.add(btnProdBack);
	btnProdBack.addEventListener('click', mostrarCategorias);
	// AGREGO BOTON PRODUCTOS AL ESPACIO ARRIBA

	for (i = 0; i < productosDeCategoria.length; i++) {

		productoId = productosDeCategoria[i].productoId;
		productoNombre = productosDeCategoria[i].nombre;

		prodbtn = ui.ButtonProd(productoNombre, productoId);

		prodbtn.addEventListener('click', function(e) {

			agregarLineaDeComanda(e.source.id);

		});
		win.ContenedorGlobalPC.ContenedorProductos.add(prodbtn);
	}

	// ocultarCategorias(categoriaNombre);
	ocultarCategorias();

}

function ocultarCategorias(categoriaNombre) {
	// win.ContenedorGlobalPC.LabelGPCTitulo.setText(categoriaNombre);
	// win.ContenedorGlobalPC.ButtonProdBack.setVisible(true);
	win.ContenedorGlobalPC.ContenedorProductos.setVisible(true);
	win.ContenedorGlobalPC.ContenedorCategorias.setVisible(false);

}

function mostrarCategorias() {
	// win.ContenedorGlobalPC.LabelGPCTitulo.setText('Categorías');
	// win.ContenedorGlobalPC.ButtonProdBack.setVisible(false);
	win.ContenedorGlobalPC.ContenedorProductos.setVisible(false);
	win.ContenedorGlobalPC.ContenedorCategorias.setVisible(true);
}

function abrirComanda() {

	var winServicio = ui2.ModalServicio();

	winServicio.ButtonPad1.addEventListener('click', btn1);
	winServicio.ButtonPad2.addEventListener('click', btn2);
	winServicio.ButtonPad3.addEventListener('click', btn3);
	winServicio.ButtonPad4.addEventListener('click', btn4);
	winServicio.ButtonPad5.addEventListener('click', btn5);
	winServicio.ButtonPad6.addEventListener('click', btn6);
	winServicio.ButtonPad7.addEventListener('click', btn7);
	winServicio.ButtonPad8.addEventListener('click', btn8);
	winServicio.ButtonPad9.addEventListener('click', btn9);
	winServicio.ButtonPad0.addEventListener('click', btn0);
	winServicio.ButtonPadDel.addEventListener('click', btnDel);
	winServicio.ButtonPadConfirmar.addEventListener('click', btnEnter);
	winServicio.ButtonPadCancelar.addEventListener('click', btnCancelar);

	function btn1() {
		winServicio.TextFieldServicio
				.setValue(winServicio.TextFieldServicio.value + '1');
	}

	function btn2() {
		winServicio.TextFieldServicio
				.setValue(winServicio.TextFieldServicio.value + '2');
	}

	function btn3() {
		winServicio.TextFieldServicio
				.setValue(winServicio.TextFieldServicio.value + '3');
	}

	function btn4() {
		winServicio.TextFieldServicio
				.setValue(winServicio.TextFieldServicio.value + '4');
	}

	function btn5() {
		winServicio.TextFieldServicio
				.setValue(winServicio.TextFieldServicio.value + '5');
	}

	function btn6() {
		winServicio.TextFieldServicio
				.setValue(winServicio.TextFieldServicio.value + '6');
	}

	function btn7() {
		winServicio.TextFieldServicio
				.setValue(winServicio.TextFieldServicio.value + '7');
	}

	function btn8() {
		winServicio.TextFieldServicio
				.setValue(winServicio.TextFieldServicio.value + '8');
	}

	function btn9() {
		winServicio.TextFieldServicio
				.setValue(winServicio.TextFieldServicio.value + '9');
	}

	function btn0() {
		winServicio.TextFieldServicio
				.setValue(winServicio.TextFieldServicio.value + '0');
	}

	function btnDel() {
		winServicio.TextFieldServicio
				.setValue(winServicio.TextFieldServicio.value.slice(0, -1));
	}

	function btnEnter() {
		try {
			// NO PERMITO CEROS A LA IZQUIERDA
			var txtBox = winServicio.TextFieldServicio.value;
			while (txtBox.charAt(0) === '0') {
				if (txtBox.length === 1) {
					break;
				}
				if (txtBox.charAt(1) === '.') {
					break;
				}
				txtBox = txtBox.substr(1, txtBox.length - 1);
			}

			if (winServicio.TextFieldServicio.value !== "") {

				crearComanda(txtBox);
				winServicio.close();
				winServicio = null;
			} else {
				throw {
					message : "Introduzca un número de mesa"
				};
			}
		} catch (e) {
			alert(e.message);
		}
	}
	;
	function btnCancelar() {
		winServicio.close();
		winServicio = null;
	}
	;

	winServicio.open();

};

function crearComanda(serv) {

	if (validarNuevaComanda(serv)) {

		comandaModelo.setUltima(serv);

		// CREO TABLEVIEW COMANDA
		var rowNuevaComanda, tablaCom = ui.TableComanda(serv);

		win.ContenedorComanda.add(tablaCom);
		opcionesDeLinea(tablaCom);
		// mariano agrego
		// CREO ROW LISTA COMANDAS
		rowNuevaComanda = ui.ComandasTableViewRow(serv);
		rowNuevaComanda.addEventListener('click', function(e) {
			comandaModelo.setUltima(e.source.idRow);
			ocultarUltimaComanda();
		});
		win.ContenedorTablaComandas.TableViewComandas
				.appendRow(rowNuevaComanda);
		win.ContenedorTablaComandas.TableViewComandas
				.scrollToIndex(comandaModelo.getCantComandas());
		comandaModelo.setCantComandas();
		// OCULTO ULTIMA COMANDA SELECCIONADA
		ocultarUltimaComanda();
		ordernarComandas();

	} else {
		throw {
			message : "La mesa ya está en uso"
		};
	}
}

function validarNuevaComanda(serv) {

	var comandasAbiertas = win.ContenedorComanda.getChildren(), i;
	if (comandasAbiertas.length > 0) {
		for (i = 0; i < comandasAbiertas.length; i++) {
			if (comandasAbiertas[i].idMesa === serv) {
				comandasAbiertas = null;
				return false;
			}
		}
		comandasAbiertas = null;
		return true;
	} else {
		comandasAbiertas = null;
		return true;
	}

}

function ocultarUltimaComanda() {

	// ESTA FUNCION OCULTA TODAS LAS COMANDAS EXCEPTO LA QUE RECIBE POR
	// PARAMETRO
	var ultima = comandaModelo.getUltima(), i, j, comandasAbiertas = win.ContenedorComanda
			.getChildren(), rowsComandasAbiertas = win.ContenedorTablaComandas.TableViewComandas.data[0].rows;
	for (i = 0; i < comandasAbiertas.length; i++) {
		if (comandasAbiertas[i].idMesa === ultima) {
			comandasAbiertas[i].setVisible(true);
			calcularTotal(comandasAbiertas[i]);
			// EFECTO DE SELECCIONADO EN LA TABLA COMANDAS
		} else {
			comandasAbiertas[i].setVisible(false);
		}
	}
	for (j = 0; j < rowsComandasAbiertas.length; j++) {
		if (rowsComandasAbiertas[j].idRow === ultima) {
			rowsComandasAbiertas[j].backgroundColor = '#2f3154';
			// EFECTO DE SELECCIONADO EN LA TABLA COMANDAS
		} else {
			rowsComandasAbiertas[j].backgroundColor = '#655c6d';
		}
	}

}

function eliminarComanda() {

	var i, j, ultima = comandaModelo.getUltima(), ultima2 = comandaModelo
			.getUltima(), comandasAbiertas = win.ContenedorComanda
			.getChildren(), tablaComandasAbiertas = win.ContenedorTablaComandas.TableViewComandas.data[0].rows;

	// RECORRO AMBOS CONTENEDORES Y SACO LA ULTIMA TABLEVIEW
	for (i = 0; i < comandasAbiertas.length; i++) {
		if (comandasAbiertas[i].idMesa === ultima) {
			win.ContenedorComanda.remove(comandasAbiertas[i]);
			comandaModelo.setUltima(comandasAbiertas[0].idMesa);
			comandaModelo.setRestarCantComandas();
			if (ultima === 'Fast') {
				crearComanda('Fast');
			}
			if ((comandasAbiertas[0].idMesa === comandasAbiertas[i].idMesa)
					&& (comandasAbiertas.length - 1 !== 0)) {
				comandaModelo.setUltima(comandasAbiertas[1].idMesa);
			}
		}
	}
	for (j = 0; j < tablaComandasAbiertas.length; j++) {
		if (tablaComandasAbiertas[j].idRow === ultima) {
			win.ContenedorTablaComandas.TableViewComandas.deleteRow(j);
		}
	}
	win.ContenedorTablaComandas.TableViewComandas.scrollToIndex(comandaModelo
			.getCantComandas());
	ocultarUltimaComanda();
	ordernarComandas();

}

function confirmarEliminar() {
	var opcionesDialogSiNo = uic.DialogoOpcionesSiNO();
	opcionesDialogSiNo.setTitle("¿Seguro que desea eliminar la comanda?");
	opcionesDialogSiNo.show();
	opcionesDialogSiNo.addEventListener('click', function(event) {
		if (event.index == 1) {
			event.cancel = true;
		} else if (event.index == 0) {
			eliminarComanda();
		}
	});
}

function ordernarComandas() {
	var data = win.ContenedorTablaComandas.TableViewComandas.data[0].rows;
	data.sort(comparador);
	win.ContenedorTablaComandas.TableViewComandas.setData(data);
}

function comparador(obj1, obj2) {

	if (obj1.idRow === 'Fast' && obj2.idRow !== 'Fast') {
		return -1;
	} else if (obj1.idRow !== 'Fast' && obj2.idRow === 'Fast') {
		return 1;
	}
	if (parseInt(obj1.idRow) > parseInt(obj2.idRow)) {
		return 1;
	} else if (parseInt(obj1.idRow) < parseInt(obj2.idRow)) {
		return -1;
	}
	return 0;
}

// ********************************COMPORTAMIENTO TABLA
// COMANDA************************************************

function agregarLineaDeComanda(productoId) {
	var p, comandaId = comandaModelo.getUltima(), tabla, rows, row, cantidad = null, indice = 0, existeProd = false, itemId, pos, prod = productoModelo
			.productoPorId(productoId);

	tabla = obtenerTabla(comandaId);

	rows = tabla.data;

	if (rows.length > 0) {
		indice = rows[0].rows.length - 1;
		for (p = 0; p < rows[0].rows.length; p++) {
			itemId = rows[0].rows[p].itemId.text;
			if (itemId == productoId) {
				cantidad = rows[0].rows[p].children[1].text;
				existeProd = true;
				pos = p;
				row = generarRow(prod.nombre, cantidad, prod.productoId,
						prod.precio, comandaId);
			}
		}
	}

	if (cantidad == null) {
		cantidad = uic.CantidadProducto(0);
		row = generarRow(prod.nombre, 0, prod.productoId, prod.precio,
				comandaId);
	}

	if ((rows.length == 0) || (existeProd == false)) {
		tabla.appendRow(row);
		tabla.scrollToIndex(indice);
	} else {
		tabla.total -= parseInt(rows[0].rows[pos].children[2].text);
		tabla.scrollToIndex(p);
		tabla.updateRow(pos, row);

	}
	tabla.total += parseInt(row.children[2].text);
	calcularTotal(tabla);

}

function opcionesDeLinea(tabla) {

	tabla.addEventListener("click", function(e) {
		tabla.rowaBorrar = e.index;
		tabla.idaBorrar = e.source.itemId.text;
		// id del producto para descontar del total
		tabla.nomProd = e.source.itemTitle.text;
		tabla.cantidad = e.source.cantidad.text;
		tabla.precio = e.source.precio;
		var opcionesDialog = uic.DialogoOpciones();
		opcionesDialog.setTitle("Modificar línea: " + e.source.itemTitle.text);
		ejecutarOpcion(opcionesDialog, tabla);
		opcionesDialog.show();
	});

}

function ejecutarOpcion(optionDialog, tabla) {
	optionDialog.addEventListener('click', function(event) {
		if (event.index == 2) {
			event.cancel = true;
		} else if (event.index == 1) {
			modificarRow(tabla);
		} else if (event.index == 0) {
			deleteRow(tabla);
		}
	});
}

function modificarRow(tabla) {
	var ModificarLineaWindow = require('/Vista/ModificarLineaWindow'), winModifLinea = ModificarLineaWindow
			.ModificarLinealWindow();

	winModifLinea.Mensaje.text = 'Por favor ingrese la nueva cantidad de: '
			+ tabla.nomProd;
	winModifLinea.CrearPicker.setValue(tabla.cantidad);
	// no funciona algo con date!

	winModifLinea.BotonAceptar.nombre = tabla.nomProd;
	winModifLinea.BotonAceptar.idProd = tabla.idaBorrar;
	winModifLinea.BotonAceptar.precio = tabla.precio;
	winModifLinea.BotonAceptar.tablaId = tabla.idMesa;
	winModifLinea.BotonAceptar.cantidad = 1;

	winModifLinea.BotonCancelar.addEventListener('click', function(a) {
		winModifLinea.close();
		winModifLinea = null;
	});
	winModifLinea.CrearPicker.addEventListener('change', function(y) {
		winModifLinea.BotonAceptar.cantidad = y.rowIndex + 1;
	});
	winModifLinea.BotonAceptar
			.addEventListener(
					'click',
					function(e) {
						var nuevaRow = generarRow(e.source.nombre,
								e.source.cantidad - 1, e.source.idProd,
								e.source.precio, e.source.tablaId);
						tabla.total = (tabla.total - tabla.data[0].rows[tabla.rowaBorrar].children[2].text)
								+ parseInt(nuevaRow.children[2].text);
						tabla.updateRow(tabla.rowaBorrar, nuevaRow);
						winModifLinea.close();
						winModifLinea = null;
						calcularTotal(tabla);
					});
	winModifLinea.open();

}

function deleteRow(tabla) {
	var opcionesDialogSiNo = uic.DialogoOpcionesSiNO();
	opcionesDialogSiNo.setTitle("Seguro que desea borrar la línea de venta?");
	opcionesDialogSiNo.show();
	opcionesDialogSiNo
			.addEventListener(
					'click',
					function(event) {
						if (event.index == 1) {
							event.cancel = true;
						} else if (event.index == 0) {
							(tabla.total -= tabla.data[0].rows[tabla.rowaBorrar].children[2].text);
							tabla.deleteRow(tabla.rowaBorrar);
							calcularTotal(tabla);
						}
					});
}

function obtenerTabla(Id) {
	var c, tablas = win.ContenedorComanda.getChildren(), tabla;
	for (c = 0; c < tablas.length; c++) {
		if (tablas[c].idMesa === Id) {
			tabla = tablas[c];
			return tabla;
		}
	}
	tablas = null;

}

function generarRow(nombre, cant, id, precio, tablaId) {
	var nombreProd = uic.NombreProducto(nombre), cantidad = uic
			.CantidadProducto(cant), idProd = uic.IdProducto(id), costo = uic
			.CostoProductos(cantidad.text, precio), row = uic.CrearRow(idProd,
			nombreProd, tablaId, cantidad.text, precio);
	row.add(nombreProd);
	row.add(cantidad);
	row.add(costo);
	row.add(idProd);
	return row;
}

function calcularTotal(tabla) {
	if (tabla.total !== 0) {
		win.ContenedorPieComanda.PieTabla.importe.setText('$ ' + tabla.total);
	} else {
		win.ContenedorPieComanda.PieTabla.importe.setText('$ 0');
	}
}

// ************************************* CONTROL TURNO
// *****************************
function mostrarInfoTurno() {
	var winInfoTurno, rowinfo, total, fecha, nroServ, i, InfoTurnoWindow = require('Vista/InfoTurnoWindow'), servicioComanda = require('/Servicio/ServComandaLinea');
	if (servicioTurno.estaActivo(turnoModelo.dispositivo,
			turnoModelo.fechaInicio) === 1) {
		servicioComanda.cargarComandas(turnoModelo.dispositivo,
				turnoModelo.fechaInicio);
	} else {
		comandaModelo.modelosComanda = [];
		// comandaModelo.totalAcero();
	}
	winInfoTurno = InfoTurnoWindow.InfoTurnoWindow();

	winInfoTurno.LblDatoUsuario.text = turnoModelo.usuario;
	winInfoTurno.LblDatoFechaInicio.text = turnoModelo.fechaInicio;
	winInfoTurno.LblDatoFechaFin.text = turnoModelo.fechaFin;
	winInfoTurno.LblDatoImporte.text = turnoModelo.getMonto();// duda

	for (i = 0; i < comandaModelo.modelosComanda.length; i++) {
		nroServ = comandaModelo.modelosComanda[i].nroServicio;
		fecha = comandaModelo.modelosComanda[i].fecha;
		total = comandaModelo.modelosComanda[i].total;
		rowinfo = generarRowComandas(nroServ, fecha, total);

		winInfoTurno.ContenedorRegistros.tablaRegistros.appendRow(rowinfo);
		winInfoTurno.ContenedorRegistros.tablaRegistros
				.scrollToIndex(comandaModelo.modelosComanda.length);
	}

	winInfoTurno.BotonCerrar.addEventListener('click', function(a) {
		winInfoTurno.close();
		winInfoTurno = null;
	});

	winInfoTurno.open();

}

function generarRowComandas(nroServ, fecha, total) {
	var servicio = uic.NroServicio(nroServ), 
	fechaCom = uic.lblFecha(fecha), totalCom = uic.lblTotal(total), rowComanda = uic
			.CrearRowInfoComanda(servicio, fechaCom, totalCom);

	rowComanda.add(servicio);
	rowComanda.add(fechaCom);
	rowComanda.add(totalCom);
	return rowComanda;
}

// ******************************************** BASE DE DATOS
// ****************************
function confirmarCerrarComanda() {
	var ultima = comandaModelo.getUltima(), opcionesDialogSiNo, tabla = obtenerTabla(ultima);
	if (tabla.total !== 0) {
		opcionesDialogSiNo = uic.DialogoOpcionesSiNO();
		opcionesDialogSiNo.setTitle("¿Seguro que desea cerrar la comanda?");
		opcionesDialogSiNo.show();
		opcionesDialogSiNo.addEventListener('click', function(event) {
			if (event.index === 1) {
				event.cancel = true;
			} else if (event.index === 0) {
				cerrarComanda();
			}
		});
	} else {
		alert('No hay datos para guardar');
	}
};

function cerrarComanda() {

	var p, cantidad, producto, totalLinea, servicioComanda = require('/Servicio/ServComandaLinea'), servicioTurno = require('/Servicio/ServTurno');
	ultima = comandaModelo.getUltima(), tabla = obtenerTabla(ultima),
			lineas = tabla.data, fecha = utiles.obtenerFecha(),
			dispositivo = turnoModelo.dispositivo, nroServ = tabla.idMesa,
			total = tabla.total,
			// usuario = turnoModelo.usuario,
			fechaInicio = turnoModelo.fechaInicio,
			// DATOS PARA IMPRIMIR
			paraImprimir = "";
	paraImprimir += fecha + ",";
	paraImprimir += nroServ.toString() + ",";
	paraImprimir += total.toString() + ",";
    
    //GUARDA LINEAS
	for (p = 0; p < lineas[0].rows.length; p++) {
		cantidad = lineas[0].rows[p].cantidad;
		producto = lineas[0].rows[p].itemId.text;
		totalLinea = (lineas[0].rows[p].precio * cantidad);
		nomProducto = lineas[0].rows[p].itemTitle.text;
		servicioComanda.guardarLineasComanda(cantidad, producto, totalLinea,
				fecha, nroServ, dispositivo);
		Ti.API.info(p + " " + producto + " " + lineas[0].rows.length);
		paraImprimir += cantidad.toString() + ",";
		paraImprimir += nomProducto + ",";
		paraImprimir += totalLinea.toString() + ",";
	}
        //GUARDA COMANDA
	if (servicioComanda.guardarComanda(nroServ, fecha, dispositivo, total,
			fechaInicio)) {
		Ti.API.info('Comanda Guardada');
		eliminarComanda();
	}

	// GUARDO TOTAL DE LA COMANDA EN TURNO ACTIVO EN MEMORIA Y DB
	servicioTurno.setMontoVendido(total);
	confirmarImprimir(paraImprimir);

};
function confirmarImprimir(textoComanda) {
	var imprimir = require('com.my.module'), opcionesDialogSiNo, estado = false;
	estado = imprimir.EstadoImpresora();

	opcionesDialogSiNo = uic.DialogoOpcionesSiNO();
	opcionesDialogSiNo.setTitle("¿Desea imprimir la comanda?");
	opcionesDialogSiNo.show();
	opcionesDialogSiNo.addEventListener('click', function(event) {
		if (event.index == 1) {
			event.cancel = true;
		} else if (event.index == 0) {
			if (estado) {
				imprimir.ImprimirTexto(textoComanda);
			} else {
				alert('No se detecta la impresora');
			}
		}
	});

};

function confirmarCerrarTurno() {
	var montoTotal = turnoModelo.getMonto(), opcionesDialogSiNo;
	if (montoTotal !== 0) {
		opcionesDialogSiNo = uic.DialogoOpcionesSiNO();
		opcionesDialogSiNo
				.setTitle("¿Seguro que desea cerrar el turno activo?");
		opcionesDialogSiNo.show();
		opcionesDialogSiNo.addEventListener('click', function(event) {
			if (event.index == 1) {
				event.cancel = true;
			} else if (event.index == 0) {
				cerrarTurno(confirmarSincronizar);
			}
		});
	} else {
		alert('El turno no tiene registros');
	}
};

function cerrarTurno(callback) {
	var fechafin = utiles.obtenerFecha();

	if (servicioTurno.actualizarTurno(fechafin)) {

		return callback(true, function() {
			reLog();
		});
	}
}

// ***********************************************************SINCRONIZAR**********************

/*
 * function confirmarSalir(callback) { var opcionesDialogSiNo;
 * 
 * opcionesDialogSiNo = uic.DialogoOpcionesSiNO();
 * opcionesDialogSiNo.setTitle("¿Está seguro que quiere salir?");
 * opcionesDialogSiNo.show(); opcionesDialogSiNo.addEventListener('click',
 * function(event) { if (event.index == 1) { event.cancel = true; } else if
 * (event.index == 0) {
 * 
 * confirmarSincronizar(true); return callback(true, function(){
 * 
 * Titanium.Android.currentActivity.finish(); });
 * //setTimeout(Titanium.Android.currentActivity.finish(), 5000); } }); };
 */

function confirmarSincronizar(esCierre, callback) {
	var opcionesDialogSiNo;

	opcionesDialogSiNo = uic.DialogoOpcionesSiNO();
	opcionesDialogSiNo.setTitle("¿Desea sincronizar las bases de datos?");
	opcionesDialogSiNo.show();
	opcionesDialogSiNo.addEventListener('click', function(event) {
		if (event.index == 1) {
			if (esCierre) {
				event.cancel = true;
				callback();
			} else {
				event.cancel = true;
			}

		} else if (event.index == 0) {
			if (esCierre) {
				sincro1(sincro2);
				callback();
			} else {
				sincro1(sincro2);
			}
		}
	});

};

function sincro1(callback) {
	indicadorSincroOn();
	var ultimaFechaSincro, mifecha, sincroDb = require('/Database/SincroDatabase');

	ultimaFechaSincro = sincroDb.SincroDatabase('select', '');
	mifecha = ultimaFechaSincro.fieldByName('Fecha');
	Ti.API.info(mifecha);

	return callback(mifecha, function() {
		cargarContenedores();
		indicadorSincroOff();
	});
}

function sincro2(ultimaFecha, callback) {

	var sincro = require('/Sincronizacion/Sincro');
	if (Ti.Network.online) {
		sincro.traerCategorias(usuarioModelo.modelosUsuario[0].empresaId,
				ultimaFecha);
		setTimeout(callback, 6000);
	} else {
		indicadorSincroOff();
		alert('El dispositivo no dispone de una conexión a internet para realizar la sincronización.');
	}

}

function indicadorSincroOn() {
	var ind = ui.IndicadorSincro();
	/*
	 * win.add(ind); win.IndicadorSincro.show();
	 */
	win.IndicadorSincro = ind;
	ind.show();
}

function indicadorSincroOff() {
	win.IndicadorSincro.hide();
	win.remove(win.IndicadorSincro);
}

// ************************************************* CODIGO SOCIOS / PROMOS
// **********************************
/*function canjearCodigo() {
	var codigoWin = require('Vista/ModalCodigoWindows'), windowsCodigo = codigoWin
			.CodigoWindows();

	windowsCodigo.ButtonCodigoCanjear.addEventListener('click', function(e) {
		var cod = windowsCodigo.TextFieldCodigo.value;
		if (cod !== null && cod != "") {
			windowsCodigo.ButtonCodigoCanjear.codigo = cod;
			controlarCodigo(cod);
		}
	});

	windowsCodigo.ButtonCancelCodigo.addEventListener('click', function(e) {
		windowsCodigo.close();
	});
	windowsCodigo.open();
};
function controlarCodigo(cod) {
	servicioPromoSocio = require('/Servicio/ServPromoSocio');
	servicioPromoSocio.cargarPromociones(cod);
	servicioPromoSocio.cargarSocios(cod);

	// OBTENGO socios y promociones DEL MODELO
	misPromociones = require('/Modelo/ModeloPromocion');
	misSocios = require('/Modelo/ModeloSocio');

	if (misPromociones.modelosPromociones[0].codigo !== null) {
		var prod = misPromociones.modelosPromociones[0].ProductoId, desc = misPromociones.modelosPromociones[0].PorcentajeDesc;
		if (prod !== null && prod !== 0) {
			// buscar el prod y agregarlo valor 0 color rojo y que no se repita

		} else if (desc !== null && desc !== 0) {
			// descuento del total de la comanda agregar linea
		}
		;

	} else if (misSocios.modelosSocios[0].codigo !== null) {
		var desc = misSocios.modelosSocios[0].PorcentajeDesc;
		if (desc !== null && desc !== 0) {
			// descuento del total de la comanda agregar linea

		}
	}
	;
};*/

function reLog() {

	var miControlador = require('Controlador/ControladorLogin');
	miControlador.comenzarAplicacion(true);

}

exports.crearTurno = function() {
	turnoModelo.setTurno(usuarioModelo.modelosUsuario[0].nombre,
			Titanium.Platform.id);
	servicioTurno.guardarTurno(turnoModelo.fechaInicio,
			turnoModelo.fechaInicio, 1, 0, usuarioModelo.modelosUsuario[0].id,
			turnoModelo.dispositivo);
	
	win.BarraEstado.LabelUsuarioLog.setText('Usuario: ' + turnoModelo.usuario);
			
			
	// turno.montoVendido = 0;
};
