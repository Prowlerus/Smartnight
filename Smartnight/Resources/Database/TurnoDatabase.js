exports.TurnoDatabase = function(accion, fechaInicio, fechaFin, activo, montoVendido, usuario, dispositivo) {

    var db, rows;
	switch(accion) {
		case 'insert':
			{
				try {
					db = Ti.Database.open('dbSmartnight');
					db.execute('INSERT OR REPLACE INTO Turno VALUES("'+ fechaInicio + '","' + fechaFin + '",' + activo + ',' + montoVendido + ',' + usuario + ',"' + dispositivo + '");');
				} catch (e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Turno creado');
				}
			}
			break;

		case 'select':
			{
				try {
					db = Ti.Database.open('dbSmartnight');
					rows = db.execute('SELECT Activo FROM Turno WHERE Dispositivo = "' + dispositivo + '" AND ' + 'FechaInicio = "' + fechaInicio +'"');
					return rows;

				} catch(e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Turno consultado');
				}
			}
			break;
			
			case 'update':
			{
				try {
					db = Ti.Database.open('dbSmartnight');
					rows = db.execute('UPDATE Turno SET FechaFin = "'+ fechaFin +'", Activo = ' + 0 + ' WHERE Activo = 1');
					return true;

				} catch(e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Turno modificado');
				}
			}
			break;
			
			case 'actualizarMonto':
            {
                try {
                    db = Ti.Database.open('dbSmartnight');
                    rows = db.execute('UPDATE Turno SET MontoVendido = '+ montoVendido +' WHERE Activo = 1');
                    return true;

                } catch(e) {
                    Ti.API.info('Error' + e.message);
                } finally {
                    db.close();
                    Ti.API.info('Turno modificado');
                }
            }
            break;
			
			case 'selectExiste':
			{
				try {
					db = Ti.Database.open('dbSmartnight');
					row = db.execute('SELECT * FROM Turno WHERE Activo = 1');
					return row;

				} catch(e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Turnos activos consultados');
				}
			}
			break;
			
			
			case 'selectTodos':
            {
                try {
                    db = Ti.Database.open('dbSmartnight');
                    rows = db.execute('SELECT * FROM Turno WHERE Activo = 0');
                    return rows;

                } catch(e) {
                    Ti.API.info('Error' + e.message);
                } finally {
                    db.close();
                    Ti.API.info('Turno consultado para json');
                }
            }
            break;
            case 'deleteAll':
            {
                try {
                    db = Ti.Database.open('dbSmartnight');
                    db.execute('DELETE FROM Turno Where Activo = 0');

                } catch(e) {
                    Ti.API.info('Error' + e.message);
                } finally {
                    db.close();
                    Ti.API.info('Turno borrado');
                }
            }
            break;
            
			
	}
};


