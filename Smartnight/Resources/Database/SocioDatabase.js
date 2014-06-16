exports.SocioDatabase = function(accion, id, codigo, nombre, porcentajeDesc) {

	switch(accion) {
		case 'insert':
			{
				try {
					var db = Ti.Database.open('dbSmartnight');
					Ti.API.info(id, codigo, nombre, porcentajeDesc);
					db.execute('INSERT OR REPLACE INTO Socio (Id, Codigo, Nombre, PorcentajeDesc) VALUES(' + id + ',"' + codigo + '","' + nombre + '",' + porcentajeDesc + ');');
				} catch (e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Socio ingresado');
				}
			}
			break;

		case 'select':
			{
				try {
					var db = Ti.Database.open('dbSmartnight'), rows = db.execute("SELECT * FROM Socio");

					return rows;

				} catch(e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Socios consultados');
				}
			}
			break;
			case 'selectPorCod':
			{
				try {
					var db = Ti.Database.open('dbSmartnight'),
					row = db.execute('SELECT Codigo FROM Socio WHERE Codigo =' + codigo + ';');
					return row;

				} catch(e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Socio consultado por codigo');
				}
			}
			break;
	}
};
