exports.LineaDatabase = function(accion, cantidad, producto, totalLinea, fecha, servicio, dispositivo) {


    
	switch(accion) {
		case 'insert':
			{
				try {
					db = Ti.Database.open('dbSmartnight'),
					db.execute('INSERT OR REPLACE INTO LineaComanda (Cantidad, Producto, TotalLinea, Fecha, NroServicio, Dispositivo) VALUES(' + cantidad + ',' + producto + ',' + totalLinea + ',"' + fecha + '","' + servicio + '","' + dispositivo + '");');
				} catch (e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Linea ingresada');
				}
			}
			break;

		case 'selectTodos':
			{
				try {
					db = Ti.Database.open('dbSmartnight');
					rows = db.execute('SELECT * FROM LineaComanda, Comanda, Turno WHERE LineaComanda.Fecha = Comanda.Fecha AND Comanda.FechaTurno = Turno.FechaInicio AND Turno.Activo= 0');

					return rows;

				} catch(e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Lineas consultadas');
				}
			}
			break;
			
			case 'deleteAll':
            {
                try {
                    db = Ti.Database.open('dbSmartnight');
                    db.execute('DELETE FROM LineaComanda WHERE LineaComanda.Fecha IN (SELECT LineaComanda.Fecha FROM LineaComanda, Comanda, Turno WHERE LineaComanda.Fecha = Comanda.Fecha AND Comanda.FechaTurno = Turno.FechaInicio AND Turno.Activo = 0)');

                } catch(e) {
                    Ti.API.info('Error' + e.message);
                } finally {
                    db.close();
                    Ti.API.info('Lineas borradas');
                }
            }
            break;
	}
}; 