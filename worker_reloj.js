function reloj() {
    var hoy=new Date(); 
    var h=hoy.getHours(); 
    var m=hoy.getMinutes(); 
    var s=hoy.getSeconds();
    
    m = actualizarHora(m);    
    s = actualizarHora(s);
    
    postMessage(h+":"+m+":"+s);
    var t = setTimeout(function(){reloj()},500);
  
}
 
function actualizarHora(i) {
    if (i<10) {i = "0" + i};  // Añadir el cero en números menores de 10
    return i;
}


//Inicia la funcion 
reloj();