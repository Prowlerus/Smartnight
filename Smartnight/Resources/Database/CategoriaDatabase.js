exports.CategoriaDatabase = function(accion, id, nombre,color) {

	switch(accion) {
		case 'insert':
			{
				try {
					var db = Ti.Database.open('dbSmartnight');
					db.execute('INSERT OR REPLACE INTO Categoria(CategoriaId, Nombre, Color) VALUES('+ id + ' , "' + nombre + '","'+ color +'");');
				} catch (e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Categoría ' + nombre + ' creada');
				}
			}
			break;

		case 'select':
			{
				try {
					var db = Ti.Database.open('dbSmartnight'),
					rows = db.execute('SELECT * FROM Categoria');	
									
					return rows;

				} catch(e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Categorías consultadas');
				}
			}
			break;
			
		case 'delete':
			{
				try {
					var db = Ti.Database.open('dbSmartnight');
					db.execute('DELETE FROM Categoria WHERE CategoriaId =' + id + ';');
					db.close();
					return true;

				} catch(e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Categoría ' + nombre + ' eliminada');
				}
			}
			break;
	}
};


