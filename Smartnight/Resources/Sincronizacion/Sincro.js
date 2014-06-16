//CASCADA DE METODOS DE SINCRONIZACION PARA WEBSERVICE REST
//*****************************************************************************************************************
//****************************************      Metodos GET               *****************************************
var utiles = require('/Utilidades/Utiles');

function traerCategorias(empresaId, fechaSincro) {
    var xhr, urlCategoria = 'http://smartnight.azurewebsites.net/api/wacategoria/?empresaId=' + empresaId + '&fechaSinc=' + fechaSincro;

    Ti.API.info(urlCategoria);
    xhr = Ti.Network.createHTTPClient({
        onload : function(e) {
            Ti.API.info("Received text: " + this.responseText);
            cargarCategoriaJson(JSON.parse(this.responseText));
            //esto al final o despues de cargar categoria
            traerProductos(empresaId, fechaSincro);
        },
        onerror : function(e) {
            Ti.API.info(this.responseText);
            Ti.API.info(this.status);
            Ti.API.info(e.error);
            alert('El servidor no es accesible momentaneamente. Inténtelo nuevamente más tarde.');
        },
        timeout : 15000
    });

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.open('GET', urlCategoria);
    xhr.send();

}//END FUNCTION


exports.traerCategorias = traerCategorias;

function traerProductos(empresaId, fechaSincro) {
    var xhr, urlProducto = 'http://smartnight.azurewebsites.net/api/waproducto/?empresaId=' + empresaId + '&fechaSinc=' + fechaSincro;
    Ti.API.info(urlProducto);
    xhr = Ti.Network.createHTTPClient({
        onload : function(e) {
            Ti.API.info("Received text: " + this.responseText);
            cargarProductoJson(JSON.parse(this.responseText));
            traerUsuarios(empresaId, fechaSincro);
        },
        onerror : function(e) {
            Ti.API.info(this.responseText);
            Ti.API.info(this.status);
            Ti.API.info(e.error);
            alert('El servidor no es accesible momentaneamente. Inténtelo nuevamente más tarde.');
        },
        timeout : 5000
    });

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.open('GET', urlProducto);
    xhr.send();

}//END FUNCTION

function traerUsuarios(empresaId, fechaSincro) {
    var xhr, urlUsuarios = 'http://smartnight.azurewebsites.net/api/wausuario/?empresaId=' + empresaId + '&fechaSinc=' + fechaSincro;
    Ti.API.info(urlUsuarios);
    xhr = Ti.Network.createHTTPClient({
        onload : function(e) {
            Ti.API.info("Received text: " + this.responseText);
            cargarUsuarioJson(JSON.parse(this.responseText));
            traerPromociones(empresaId, fechaSincro);
            //principal.cargarContenedores();
        },
        onerror : function(e) {
            Ti.API.info(this.responseText);
            Ti.API.info(this.status);
            Ti.API.info(e.error);
            alert('El servidor no es accesible momentaneamente. Inténtelo nuevamente más tarde.');
        },
        timeout : 5000
    });

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.open('GET', urlUsuarios);
    xhr.send();

}//END FUNCTION

function traerPromociones(empresaId, fechaSincro) {
    var xhr, urlPromociones = 'http://smartnight.azurewebsites.net/api/wapromocion/?empresaId=' + empresaId + '&fechaSinc=' + fechaSincro;
    Ti.API.info(urlPromociones);
    xhr = Ti.Network.createHTTPClient({
        onload : function(e) {
            Ti.API.info("Received text: " + this.responseText);
            cargarPromocionJson(JSON.parse(this.responseText));
            traerSocios(empresaId, fechaSincro);
            //principal.cargarContenedores();
        },
        onerror : function(e) {
            Ti.API.info(this.responseText);
            Ti.API.info(this.status);
            Ti.API.info(e.error);
            alert('El servidor no es accesible momentaneamente. Inténtelo nuevamente más tarde.');
        },
        timeout : 5000
    });

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.open('GET', urlPromociones);
    xhr.send();

}//END FUNCTION

function traerSocios(empresaId, fechaSincro) {
    var xhr, urlSocios = 'http://smartnight.azurewebsites.net/api/wasocio/?empresaId=' + empresaId + '&fechaSinc=' + fechaSincro;
    Ti.API.info(urlSocios);
    xhr = Ti.Network.createHTTPClient({
        onload : function(e) {
            Ti.API.info("Received text: " + this.responseText);
            cargarSocioJson(JSON.parse(this.responseText));
            traerRegistrosEliminados(empresaId, fechaSincro);
            //enviarTurnos(empresaId);

        },
        onerror : function(e) {
            Ti.API.info(this.responseText);
            Ti.API.info(this.status);
            Ti.API.info(e.error);
            alert('El servidor no es accesible momentaneamente. Inténtelo nuevamente más tarde.');
        },
        timeout : 5000
    });

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.open('GET', urlSocios);
    xhr.send();

}//END FUNCTION

//METODOS CONVERSION JSON A RESULTSET
function cargarCategoriaJson(json) {

    var i, categoria = require('Database/CategoriaDatabase');
    for ( i = 0; i < json.length; i++) {
        if (json[i] !== null) {
            categoria.CategoriaDatabase('insert', json[i].Id, json[i].Nombre, json[i].Color);
        }
    }
}

function cargarProductoJson(json) {

    var i, producto = require('Database/ProductoDatabase');
    for ( i = 0; i < json.length; i++) {
        if (json[i] !== null) {
            if(json[i].Activo == true){
                json[i].Activo = 1;
            }
            else{
                json[i].Activo = 0;
            }
            producto.ProductoDatabase('insert', json[i].Id, json[i].Nombre, json[i].Precio, json[i].Stock, json[i].CategoriaId, json[i].Activo);
        }
    }
}

function cargarUsuarioJson(json) {

    var i, usuario = require('Database/UsuarioDatabase');
    for ( i = 0; i < json.length; i++) {
        if (json[i] !== null) {
            usuario.UsuarioDatabase('insert', json[i].Id, json[i].Pin, json[i].Nombre, json[i].EmpresaId);
        }
    }
}

function cargarPromocionJson(json) {

    var i, promocion = require('Database/PromocionDatabase');
    for ( i = 0; i < json.length; i++) {
        if (json[i] != null) {
            promocion.PromocionDatabase('insert', json[i].Id, json[i].Codigo, json[i].ProductoId, json[i].PorcentajeDesc, json[i].ImporteDesc);
        }
    }
}

function cargarSocioJson(json) {

    var i, socio = require('Database/SocioDatabase');
    for ( i = 0; i < json.length; i++) {
        if (json[i] != null) {
            socio.SocioDatabase('insert', json[i].Id, json[i].Codigo, json[i].Nombre, json[i].PorcentajeDesc);
        }
    }
}

//**********************************     Metodos POST    *********************************************

function enviarTurnos(empresaId) {
    var jsonTurnos, xhr, urlTurno = 'http://smartnight.azurewebsites.net/api/waturno';

    xhr = Ti.Network.createHTTPClient({
        onload : function(e) {
            Ti.API.info("Enviado texto: " + this.responseText);

            enviarComanda(empresaId);
        },
        onerror : function(e) {
            Ti.API.info(this.responseText);
            Ti.API.info(this.status);
            Ti.API.info(e.error);
            alert('Error en la solicitud. Inténtelo nuevamente más tarde.');
        },
        timeout : 5000
    });

    jsonTurnos = obtenerTurnos(empresaId);

    Ti.API.info(JSON.stringify(jsonTurnos));

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.open('POST', urlTurno);
    xhr.send(JSON.stringify(jsonTurnos));
}

function enviarComanda(empresaId) {
    var jsonComanda, xhr, urlComanda = 'http://smartnight.azurewebsites.net/api/wacomanda';

    xhr = Ti.Network.createHTTPClient({
        onload : function(e) {
            Ti.API.info("Enviado texto: " + this.responseText);

            enviarLineas(empresaId);
        },
        onerror : function(e) {
            Ti.API.info(this.responseText);
            Ti.API.info(this.status);
            Ti.API.info(e.error);
            alert('Error en la solicitud. Inténtelo nuevamente más tarde.');
        },
        timeout : 5000
    });

    jsonComanda = obtenerComandas(empresaId);

    Ti.API.info(JSON.stringify(jsonComanda));

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.open('POST', urlComanda);
    xhr.send(JSON.stringify(jsonComanda));
}

function enviarLineas(empresaId) {
    var jsonLineas, xhr, urlLinea = 'http://smartnight.azurewebsites.net/api/walineacomanda';
    
    xhr = Ti.Network.createHTTPClient({
        onload : function(e) {
            Ti.API.info(this.responseText);
            
            finalizarSincro();
            //ULTIMO PASO DE LA CASCADA

        },
        onerror : function(e) {
            Ti.API.info(this.responseText);
            Ti.API.info(this.status);
            Ti.API.info(e.error);
            alert('Error en la solicitud. Inténtelo nuevamente más tarde.');
        },
        timeout : 5000
    });

    jsonLineas = obtenerLineas(empresaId);

    Ti.API.info(JSON.stringify(jsonLineas));

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.open('POST', urlLinea);
    xhr.send(JSON.stringify(jsonLineas));
}

//METODOS CONVERSION RESULTSET A JSON

function obtenerTurnos(empresaId) {

    var i, miTurno, jsonRetorno, turnos = require('Database/TurnoDatabase');
    rows = turnos.TurnoDatabase('selectTodos');

    jsonRetorno = [];
    if (rows != null) {
        while (rows.isValidRow()) {
            //ARMAR JSON MISMO ORDEN BASE DE DATOS SERVER
            miTurno = {
                FechaInicio : rows.fieldByName('FechaInicio'),
                FechaFin : rows.fieldByName('FechaFin'),
                Dispositivo : rows.fieldByName('Dispositivo'),
                MontoVendido : rows.fieldByName('MontoVendido'),
                UsuarioId : rows.fieldByName('UsuarioId'),
                EmpresaId : empresaId
            };
            jsonRetorno.push(miTurno);
            rows.next();
        }
    }

    return jsonRetorno;
}

function obtenerComandas(empresaId) {

    var i, miComanda, jsonRetorno, comandas = require('Database/ComandaDatabase');
    rows = comandas.ComandaDatabase('selectTodos');

    jsonRetorno = [];

    if (rows != null) {
        while (rows.isValidRow()) {
            //ARMAR JSON MISMO ORDEN BASE DE DATOS SERVER
            miComanda = {
                NumeroServicio : rows.fieldByName('NroServicio'),
                Fecha : rows.fieldByName('Fecha'),
                Dispositivo : rows.fieldByName('Dispositivo'),
                Total : rows.fieldByName('Total'),
                FechaTurno : rows.fieldByName('FechaTurno'),
                EmpresaId : empresaId
            };
            jsonRetorno.push(miComanda);
            rows.next();
        }
    }
    return jsonRetorno;
}

function obtenerLineas(empresaId) {

    var i, miLinea, jsonRetorno, lineas = require('Database/LineaDatabase');
    rows = lineas.LineaDatabase('selectTodos');

    jsonRetorno = [];

    if (rows != null) {
        while (rows.isValidRow()) {
            //ARMAR JSON MISMO ORDEN BASE DE DATOS SERVER
            //NOMBRES EN LA SQLITE NO COINCIDEN TOTALMENTE CON LA BASE DEL SERVER
            miLinea = {
                LineaId : rows.fieldByName('Id'), //CAMBIAR!!!!!
                Cantidad : rows.fieldByName('Cantidad'),
                ProductoId : rows.fieldByName('Producto'),
                Total : rows.fieldByName('TotalLinea'),
                Fecha : rows.fieldByName('Fecha'),
                NumeroServicio : rows.fieldByName('NroServicio'),
                Dispositivo : rows.fieldByName('Dispositivo'),
                EmpresaId : empresaId
            };
            jsonRetorno.push(miLinea);
            rows.next();
        }
    }
    return jsonRetorno;
}

//****************************************** Metodos ELIMINACION   ***************************************************


function traerRegistrosEliminados(empresaId, fechaSincro) {
    var resp, xhr, urlEliminados = 'http://smartnight.azurewebsites.net/api/waregistroeliminacion/?empresaId=' + empresaId + '&fechaSinc=' + fechaSincro;
    Ti.API.info(urlEliminados);
    xhr = Ti.Network.createHTTPClient({
        onload : function(e) {
            Ti.API.info("Received text: " + this.responseText);            
            
           eliminarRegistrosJson(JSON.parse(this.responseText));                 
           
           enviarTurnos(empresaId);     
           
        },
        onerror : function(e) {
            Ti.API.info(this.responseText);
            Ti.API.info(this.status);
            Ti.API.info(e.error);
            alert('El servidor no es accesible momentaneamente. Inténtelo nuevamente más tarde.');
        },
        timeout : 5000
    });

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.open('GET', urlEliminados);
    xhr.send();

}//END FUNCTION

/*
function confirmarEliminacionServer(empresaId) {
    var xhr, urlEliminados = 'http://smartnight.azurewebsites.net/api/waregistroeliminacion';
    Ti.API.info(urlEliminados);
    xhr = Ti.Network.createHTTPClient({
        onload : function(e) {
            Ti.API.info("Received text: " + this.responseText);
          
            enviarTurnos(empresaId);

        },
        onerror : function(e) {
            Ti.API.info(this.responseText);
            Ti.API.info(this.status);
            Ti.API.info(e.error);
            alert('El servidor no es accesible momentaneamente. Inténtelo nuevamente más tarde.');
        },
        timeout : 5000
    });
 
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.open('POST', urlEliminados);
    xhr.send(JSON.stringify([true]));

}//END FUNCTION*/





function eliminarRegistrosJson(json) {

    var funcs = [], i, j;
    
    function aux(IdObjeto, TipoObjeto){        
    return function(){
        eliminarRegistros(IdObjeto, TipoObjeto);
        };
    }  

    for ( i = 0; i < json.length; i++) {
        if (json[i] != null) {
            funcs[i] = aux(json[i].IdObjeto, json[i].TipoObjeto);
            //CREO ARRAY DE FUNCIONES PARA GUARDAR LOS DATOS DEL CONTEXTO Y LO EJECUTO LUEGO
            //Al estar todo dentro de una funcion el contexto mantiene los valores
        }
    }
    for ( j = 0; j < json.length; j++) {
        funcs[j]();

    }
}

//FUNCION CLOSURE PARA EVITAR PROBLEMAS

function eliminarRegistros(idObjeto, tipoObjeto) {
    var categoria, producto, promocion, usuario, socio;
    switch(tipoObjeto) {
        case 'Categoria':
            {
                categoria = require('Database/CategoriaDatabase');
                categoria.CategoriaDatabase('delete', idObjeto);
            }
            break;
        case 'Producto':
            {
                producto = require('Database/ProductoDatabase');
                producto.ProductoDatabase('delete', idObjeto);              
            }
            break;
        case 'Promocion':
            {
                promocion = require('Database/PromocionDatabase');
                promocion.PromocionDatabase('delete', idObjeto);
            }
            break;
        case 'Usuario':
            {
                usuario = require('Database/UsuarioDatabase');
                usuario.UsuarioDatabase('delete', idObjeto);
            }
            break;
        case 'Socio':
            {
                socio = require('Database/SocioDatabase');
                socio.SocioDatabase('delete', idObjeto);
            }
            break;
    }
}



function eliminarRegistrosLocales(){
    var lineas = require('Database/LineaDatabase'),
    comanda = require('Database/ComandaDatabase'),
    turno = require('Database/TurnoDatabase');
    
    lineas.LineaDatabase('deleteAll');
    comanda.ComandaDatabase('deleteAll');     
    turno.TurnoDatabase('deleteAll');   
    
}



//FUNCIONES AUXILIARES


function setFechaSinc() {
    var fechaSinc = require('Database/SincroDatabase');
    fechaSinc.SincroDatabase('insert', utiles.obtenerFechaUTC());
}

function finalizarSincro() {
    eliminarRegistrosLocales();
    setFechaSinc();

}

