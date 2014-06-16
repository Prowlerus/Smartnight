exports.ProductoDatabase = function(accion, id, nombre, precio, stock, categoria, activo) {
    var db, rows;
	switch(accion) {
		case 'insert':
			{
				try {
					 db = Ti.Database.open('dbSmartnight');
					db.execute('INSERT OR REPLACE INTO Producto VALUES('+ id +',"'+ nombre +'", ' + precio + ',' + stock + ','  + activo + ',' + categoria + ');');
				} catch (e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Producto ' + nombre + ' creado');
				}
			}
			break;

		case 'select':
			{
				try {
					 db = Ti.Database.open('dbSmartnight');
					rows = db.execute('SELECT * FROM Producto WHERE Activo =' + 1);
					
					return rows;
					
				} catch(e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Productos consultados');
				}
			}
			break;
			case 'selectPorCategoria':// ver por id
			{
				try {
					db = Ti.Database.open('dbSmartnight');
					rows = db.execute('SELECT * FROM Producto WHERE CategoriaId='+categoria);
				
					return rows; 
				} catch(e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Productos consultados');
				}
			}
			break;
			
		case 'delete':
			{
				try {
					db = Ti.Database.open('dbSmartnight');
					db.execute('DELETE FROM Producto WHERE ProductoId =' + id + ';');
					return true;

				} catch(e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Producto ' + id + ' eliminado');
				}
			}
			break;
	    
	}
};


