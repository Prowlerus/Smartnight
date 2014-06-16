
function obtenerFecha() {
    var tiempo = new Date(),
     horas = tiempo.getHours(),
     minutos = tiempo.getMinutes(),
     segundos = tiempo.getSeconds(),
     mes = tiempo.getMonth() + 1,
     dia = tiempo.getDate(),
     anio = tiempo.getFullYear();

    if (horas < 10) { horas = "0" + horas;}
    if (minutos < 10) { minutos = "0" + minutos;}
    if (segundos < 10) { segundos = "0" + segundos;}
    
    return anio + "-" + mes + "-" + dia + "T" + horas + ":" + minutos + ":" + segundos;
}


exports.obtenerFecha = obtenerFecha;

function obtenerFechaUTC() {
    var tiempoUTC = new Date(),
     horasUTC = tiempoUTC.getUTCHours(),
     minutosUTC = tiempoUTC.getUTCMinutes(),
     segundosUTC = tiempoUTC.getUTCSeconds(),
     mesUTC = tiempoUTC.getUTCMonth() + 1,
     diaUTC = tiempoUTC.getUTCDate(),
     anioUTC = tiempoUTC.getUTCFullYear();

    if (horasUTC < 10) { horasUTC = "0" + horasUTC;}
    if (minutosUTC < 10) { minutosUTC = "0" + minutosUTC;}
    if (segundosUTC < 10) { segundosUTC = "0" + segundosUTC;}
    
    return anioUTC + "-" + mesUTC + "-" + diaUTC + "T" + horasUTC + ":" + minutosUTC + ":" + segundosUTC;
}


exports.obtenerFechaUTC = obtenerFechaUTC;






