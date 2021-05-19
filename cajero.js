var caja = [];
var entregado = [];
caja.push(new Billete(50, 3) );
caja.push(new Billete(20, 2) );
caja.push(new Billete(10, 2) );
var dinero = 0;
var div = 0;
var papeles  = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b. addEventListener("click", entregarDinero);
