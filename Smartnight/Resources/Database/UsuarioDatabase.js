exports.UsuarioDatabase = function(accion,id, pin, nombre, empresaId) {

	switch(accion) {
		case 'insert':
			{
				try {
					var db = Ti.Database.open('dbSmartnight');
					db.execute('INSERT OR REPLACE INTO Usuario VALUES('+ id + ',' + pin + ',"' + nombre + '",' + empresaId + ');');
				} catch (e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Usuario ' + nombre + ' creado');
				}
			}
			break;

		case 'select':
			{
				try {
					var db = Ti.Database.open('dbSmartnight'),
					rows = db.execute('SELECT * FROM Usuario WHERE Pin =' + pin + ';');
					return rows;

				} catch(e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Usuario ' + nombre + ' consultado');
				}
			}
			break;
			
		case 'delete':
			{
				try {
					var db = Ti.Database.open('dbSmartnight');
					db.execute('DELETE FROM Usuario WHERE Pin =' + pin + ';');
					return true;

				} catch(e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Usuario ' + pin + ' eliminado');
				}
			}
			break;
			case 'selectPorId':
			{
				try {
					var db = Ti.Database.open('dbSmartnight'),
					row = db.execute('SELECT * FROM Usuario WHERE UsuarioId =' + id + ';');
					return row;

				} catch(e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Usuario consultado por ID');
				}
			}
			break;
	}
};


