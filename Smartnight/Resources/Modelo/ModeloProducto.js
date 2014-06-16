var datosProducto = {
	
	productoId : null,
	nombre : null,
	precio : null,
	stock : null,
	activo : null,
	categoriaId : null,
};

var modelosProducto = [];

function vaciarProductos(){
	modelosProducto.length=0;
}
function productoPorCategoria(categoriaId) {
	var i, retorno = [];
	for(i = 0; i < modelosProducto.length; i++){
		if(modelosProducto[i].categoriaId == categoriaId){
			retorno.push(modelosProducto[i]);
		}
	};
	return retorno;
};
function productoPorId(productoId) {
    for(i = 0; i < this.modelosProducto.length; i++){
		if(this.modelosProducto[i].productoId == productoId){
			return modelosProducto[i];
		}
	};
	return null;
};

exports.vaciarProductos = vaciarProductos;
exports.datosProducto = datosProducto;
exports.modelosProducto = modelosProducto;
exports.productoPorCategoria = productoPorCategoria;
exports.productoPorId = productoPorId;