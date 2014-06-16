exports.ComandaDatabase = function(accion, nroServ, fecha, dispositivo, total,fechaTurno) {
   
    
	switch(accion) {
		case 'insert':
			{
				try {
					db = Ti.Database.open('dbSmartnight');
					db.execute('INSERT OR REPLACE INTO Comanda VALUES("'+ nroServ +'","'+ fecha +'","' + dispositivo + '",' + total + ',"' + fechaTurno + '");');
				} catch (e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Comanda ingresada');
				}
			}
			break;

		case 'select':
			{
				try {
					db = Ti.Database.open('dbSmartnight');
					rows = db.execute('SELECT NroServicio,Fecha,Total FROM Comanda WHERE Dispositivo = "' + dispositivo + '" AND ' + 'FechaTurno = "' + fechaTurno +'"');
					
					return rows;
					
				} catch(e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Comandas consultadas');
				}
			}
			break;
				
		case 'delete':
			{
				try {
					db = Ti.Database.open('dbSmartnight');
					db.execute('DELETE FROM Comanda WHERE NroServicio =' + nroServ + ' AND Dispositivo ="' + dispositivo + '" AND Fecha =' + fecha + ';');
					return true;

				} catch(e) {
					Ti.API.info('Error' + e.message);
				} finally {
					db.close();
					Ti.API.info('Comanda eliminada');
				}
			}
			break;
			
			case 'selectTodos':
            {
                try {
                    db = Ti.Database.open('dbSmartnight');
                    rows = db.execute('SELECT * FROM Comanda, Turno WHERE Comanda.FechaTurno = Turno.FechaInicio AND Turno.Activo = 0');
                    return rows;

                } catch(e) {
                    Ti.API.info('Error' + e.message);
                } finally {
                    db.close();
                    Ti.API.info('Comanda consultada para json');
                }
            }
            break;
            
            case 'deleteAll':
            {
                try {
                    var db = Ti.Database.open('dbSmartnight'), 
                    rows = db.execute('DELETE FROM Comanda WHERE Comanda.FechaTurno IN (SELECT Comanda.FechaTurno FROM Comanda, Turno WHERE Comanda.FechaTurno = Turno.FechaInicio AND Turno.Activo = 0)');

                } catch(e) {
                    Ti.API.info('Error' + e.message);
                } finally {
                    db.close();
                    Ti.API.info('Comandas borradas');
                }
            }
            break;
            
	}
};


