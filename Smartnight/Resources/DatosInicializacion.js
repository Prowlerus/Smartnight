exports.DatosInicio = function(){
    
    var usuario = require('Database/UsuarioDatabase'), ultimaSincro, miFecha,
     fechaSincro = require('/Database/SincroDatabase');
    
    ultimaSincro = fechaSincro.SincroDatabase('select', '');
    
    if(ultimaSincro.rowCount < 1){
        
         // PARAMETROS (accion, IdUsuario, 'Nombre', IdEmpresa)  SUSTITUYA LOS VALORES LUEGO DEL INSERT
         usuario.UsuarioDatabase('insert',1,1111,'Admin', 1);    
         fechaSincro.SincroDatabase('insert', '2013-01-01T01:00:00');          //NO MODIFICAR ESTA FECHA
         
    }     
};

