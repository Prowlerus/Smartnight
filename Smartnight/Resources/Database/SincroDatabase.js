exports.SincroDatabase = function(accion, fecha) {

    switch(accion) {
        case 'insert':
            {
                try {
                    var db = Ti.Database.open('dbSmartnight');
                    db.execute('INSERT OR REPLACE INTO FechaSincro VALUES(1, "'+ fecha +'");');
                } catch (e) {
                    Ti.API.info('Error' + e.message);
                } finally {
                    db.close();
                    Ti.API.info('FechaSincro ' + fecha + ' registrada');
                }
            }
            break;
            
        case 'update':
            {
                try {
                    var db = Ti.Database.open('dbSmartnight'),
                    rows = db.execute('UPDATE FechaSincro SET Fecha = "'+ fecha +'"' + ' WHERE id = 1');
                    return true;

                } catch(e) {
                    Ti.API.info('Error' + e.message);
                } finally {
                    db.close();
                    Ti.API.info('Turno modificado');
                }
            }
            break;

        case 'select':
            {
                try {
                    var db = Ti.Database.open('dbSmartnight'),
                    rows = db.execute('SELECT * FROM FechaSincro WHERE id = 1;');                   
                    return rows;

                } catch(e) {
                    Ti.API.info('Error' + e.message);
                } finally {
                    db.close();                    
                }
            }
            break;         
   
        
    }
};

