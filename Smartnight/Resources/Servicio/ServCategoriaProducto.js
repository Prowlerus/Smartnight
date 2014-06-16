function cargarCategorias() {
	try {
		var db = require('/Database/CategoriaDatabase'), rows = db.CategoriaDatabase('select', "", "");

		var misCategorias = require('/Modelo/ModeloCategoria');

		misCategorias.modelosCategoria = [];

		if (rows.isValidRow()) {
			while (rows.isValidRow()) {

				misCategorias.datosCategoria = {
					categoriaId : rows.fieldByName('CategoriaId'),
					nombre : rows.fieldByName('Nombre'),
					color : rows.fieldByName('Color')
				};

				misCategorias.modelosCategoria.push(misCategorias.datosCategoria);

				rows.next();
			}
		} else {
			throw {
				message : "No hay categorías ingresadas en la base de datos"
			};
		}
	} catch(e) {
		Ti.API.info(e.message);
	}
};

exports.cargarCategorias = cargarCategorias;

function cargarProductos() {
//TRAIGO SOLO PRODUCTOS ACTIVOS
	try {
		var db = require('/Database/ProductoDatabase'), rows = db.ProductoDatabase('select', "", "", "", "", "", "");

		var misProductos = require('/Modelo/ModeloProducto');
		misProductos.vaciarProductos();

		if (rows.isValidRow()) {
			
			while (rows.isValidRow()) {
				//USO OBJETO LITERAL PARA CREAR ESTRUCTURA Y ASIGNAR AL MISMO TIEMPO, NO ME VALEN REFERENCIAS AL HACER EL PUSH
				misProductos.datosProducto = {
					productoId : rows.fieldByName('ProductoId'),
					nombre : rows.fieldByName('Nombre'),
					precio : rows.fieldByName('Precio'),
					stock : rows.fieldByName('Stock'),
					categoriaId : rows.fieldByName('CategoriaId'),
					activo : rows.fieldByName('Activo')
				};
				
				misProductos.modelosProducto.push(misProductos.datosProducto);
				rows.next();
			}
		} else {
			throw {
				message : "No hay Productos"
			};
		}

	} catch(e) {
		Ti.API.info(e.message);
	}
};
exports.cargarProductos = cargarProductos;
