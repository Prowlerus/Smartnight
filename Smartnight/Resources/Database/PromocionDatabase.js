exports.PromocionDatabase = function(accion, id, Codigo, ProductoId, PorcentajeDesc, ImporteDesc) {
    var db, rows;
    switch(accion) {
        case 'insert':
            {
                try {
                    db = Ti.Database.open('dbSmartnight');
                    db.execute('INSERT OR REPLACE INTO Promocion (Id, Codigo, ProductoId, PorcentajeDesc, ImporteDesc) VALUES(' + Id + ',"' + Codigo + '",' + ProductoId + ',' + PorcentajeDesc + ',' + ImporteDesc + ');');
                } catch (e) {
                    Ti.API.info('Error' + e.message);
                } finally {
                    db.close();
                    Ti.API.info('Promocion ingresada');
                }
            }
            break;

        case 'select':
            {
                try {
                    db = Ti.Database.open('dbSmartnight');
                    rows = db.execute("SELECT * FROM Promocion");

                    return rows;

                } catch(e) {
                    Ti.API.info('Error' + e.message);
                } finally {
                    db.close();
                    Ti.API.info('Promociones consultadas');
                }
            }
            break;
        case 'selectPorCod':
            {
                try {
                    db = Ti.Database.open('dbSmartnight');
                    rows = db.execute('SELECT Codigo FROM Promocion WHERE Codigo =' + codigo + ';');
                    return rows;

                } catch(e) {
                    Ti.API.info('Error' + e.message);
                } finally {
                    db.close();
                    Ti.API.info('Promocion consultada por codigo');
                }
            }
            break;
        case 'delete':
            {
                try {
                    db = Ti.Database.open('dbSmartnight');
                    rows = db.execute('DELETE FROM Promocion WHERE Id =' + id + ';');

                } catch(e) {
                    Ti.API.info('Error' + e.message);
                } finally {
                    db.close();
                    Ti.API.info('Promocion ' + id + ' eliminada');
                }
            }
            break;
    }

};
