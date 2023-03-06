/* var num = prompt("Ingresa un numero");

for (var i = 0; i < num; i++) {
  if (i % 3 === 2) {
    console.log(i);
  }
}
////////////////////////////////////////////////////////////
var letra = prompt("Ingresa una letra");
var num = prompt("Ingresa un numero");

var cadena = "";

for (var i = 0; i < num; i++) {
  cadena += letra;
}

console.log(cadena);
///////////////////////////////////////////////////
var num1 = prompt("Ingresa el primer numero:");
var num2 = prompt("Ingresa el segundo numero:");
var num3 = prompt("Ingresa el tercer numero:");
var num4 = prompt("Ingresa el cuarto numero:");

var suma = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4);
var media = suma / 4;

console.log("La media aritmética es: " + media); */
////////////////////////////////////////////////////////////////
var num = prompt("Ingresa un numero:");

for (var i = 1; i <= num; i++) {
  var linea = "";

  for (var j = 1; j <= i; j++) {
    linea += "*";
  }

  console.log(linea);
}
///////////////////////////////////////////////////////////////////////////////

