exports.datosDePrueba = function() {
//Datos de USUARIO
var usuario = require('Database/UsuarioDatabase');
usuario.UsuarioDatabase('insert',1,1111,'Peter', 1);


//Datos categoria
var categoria = require('Database/CategoriaDatabase');
/*categoria.CategoriaDatabase('insert',1,'Whisky','FF0000');
categoria.CategoriaDatabase('insert',2,'Cervezas','FF0000');
categoria.CategoriaDatabase('insert',3,'Postres','FF0000');
categoria.CategoriaDatabase('insert',4,'Vinos','FF0000');
categoria.CategoriaDatabase('insert',5,'Tragos','000080');
categoria.CategoriaDatabase('insert',6,'Vodkas','000080');
categoria.CategoriaDatabase('insert',7,'Gaseosas','000080');
categoria.CategoriaDatabase('insert',8,'Aguas','000080');
categoria.CategoriaDatabase('insert',9,'Comidas','FFFFFF');
categoria.CategoriaDatabase('insert',10,'Promociones','FFFFFF');
categoria.CategoriaDatabase('insert',11,'Entradas','FFFFFF');
categoria.CategoriaDatabase('insert',12,'Calientes','FFFFFF');
categoria.CategoriaDatabase('insert',13,'Frios','005502');
categoria.CategoriaDatabase('insert',14,'Espumantes','005502');
categoria.CategoriaDatabase('insert',15,'Sidras','005502');*/
//categoria.CategoriaDatabase('insert',1,'Whisky','005502');



//categoria.CategoriaDatabase('delete', 1, "");
//categoria.CategoriaDatabase('delete', 2, "");
//categoria.CategoriaDatabase('delete', 3, "");

//Datos producto
var producto = require('Database/ProductoDatabase');
/*producto.ProductoDatabase('insert', 1,'Jack Daniels', 200, 20, 1);
producto.ProductoDatabase('insert', 2,'Valantines', 200, 20, 1);
producto.ProductoDatabase('insert', 3,'Torta', 200, 20, 3);
producto.ProductoDatabase('insert', 4,'McEachen', 200, 20, 1);
producto.ProductoDatabase('insert', 5,'Mac Pay', 200, 20, 1);
producto.ProductoDatabase('insert', 6,'Johnny black', 200, 20, 1);
producto.ProductoDatabase('insert', 7,'Pilsen', 200, 20, 2);
producto.ProductoDatabase('insert', 8,'Monk', 200, 20, 1);
producto.ProductoDatabase('insert', 9,'White Horse', 200, 20, 1);
producto.ProductoDatabase('insert', 10,'Chivas Reagal', 200, 20, 1);
producto.ProductoDatabase('insert', 11,'100 Piper', 200, 20, 1);
producto.ProductoDatabase('insert', 12,'Dumbar', 200, 20, 1);
producto.ProductoDatabase('insert', 13,'J&B', 200, 20, 1);
producto.ProductoDatabase('insert', 14,'Vat 69', 200, 20, 1);
producto.ProductoDatabase('insert', 15,'Gregson', 200, 20, 1);
producto.ProductoDatabase('insert', 16,'Black and White', 200, 20, 1);
producto.ProductoDatabase('insert', 17,'Blenders', 200, 20, 1);*/
//producto.ProductoDatabase('insert', 1005,'Johnny Walker', 200, 20, 1);


var servicioTurno = require('/Servicio/ServTurno');
//servicioTurno.guardarTurno("11-11-2013 11:37:11", "11-11-2013 11:37:11", 1, 0, 99, "DISPO");
//producto.ProductoDatabase('delete', 1);
//producto.ProductoDatabase('delete', 2);
//producto.ProductoDatabase('delete', 3);

var fechasincro = require('/Database/SincroDatabase');
fechasincro.SincroDatabase('insert', '2013-01-01T01:00:00');

};