asientos=new Array[32];
var posicion = -1;
for (var i= 0; i < asientos.length; i++){
	asientos[i]=undefined;
}

var celda = document.getElementsByTagName('td');
for (var i = 0; i < celda.length; i++) {
    celda[i].addEventListener('click',redirect,false);
}
function redirect(event){
    var asiento=(event.target.textContent);
    var mostrar=document.getElementById("mostrar");
    mostrar.innerHTML=asiento;
    (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
}
function buscar(ingreso){
	var ingreso=document.getElementById("nro_dni").value;
  var operacion= ingreso*2;
  document.getElementById("nro_dni").value=operacion;
}


var name = document.getElementById("nombre").value;
var resultado = document.getElementById("mostrar");
resultado.innerHTML += name;
function celda(){
    if (name == asientos){
        celdas.style.background="#333";
    }else{
        celdas.style.background="#333";
    }
}



Function reservar(){
	var n = document.getElementById("nombre").value;
	var a = document.getElementById("apellido").value;
	var d = document.getElementById("dni").value;
	var pasajero = {
		nombre:n,
		apellido:a,
		dni:d,	
	};
	
	asientos[posicion]=pasajero
	
	alert("registro corecto");
}

function limpiar(){
	document.getElementById("dniBuscar").value="";
	document.getElementById("nombrer").value="";
	document.getElementById("apellido").value="";
	document.getElementById("dni").value="";
	var rpta=document.getElementById("");
}