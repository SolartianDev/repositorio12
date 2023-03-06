//( °C × 9/5) + 32 =  °F
//1. GRADOS CELSIUS A FARENHEIT////////////////////////////////

var num = prompt ("Ingresa la temperatura en Grados Centigrados");
var temp =  (num * 9/5) + 32
console.log(temp)

// PIRAMIDE////////////////////////////////

var num = parseInt(prompt("Ingresa un numero para la Piramide:"));

for (var i = 1; i <= num; i++) {
  var linea = "";
  for (var j = 1; j <= i; j++) {
    linea += "*";
  }
  console.log(linea);
}

for (var k = num - 1; k >= 1; k--) {
  var lineas = "";
  for (var d = 1; d <= k; d++) {
    lineas += "*";
  }
  console.log(lineas);
}
// 3. FACTORIAL////////////n! = n × (n−1)! formula///////////////////////////////////////////////

var numero = parseInt(prompt("Ingrese un numero para calcular el Factorial:"));
var factorial = 1;
for (var i = 1; i <= numero; i++) {
factorial *= i;
}
console.log("El factorial de " + numero + " es " + factorial + ".");

//////4. CAJERO////////////////


/*   var opcion = prompt("Seleccione una opción:"){ 
  1 Extraer dinero;
  2 Depositar dinero;
  3 Consultar saldo;
  4 Ver últimos movimientos;
  5 Salir;
}
 */
///////5.Fibonacci////////////// 

var n = parseInt(prompt("Ingrese un numero para calcular Fibonacci:"));
var a = 0;
var b = 1;
for (var i = 0; i < n; i++) {
  console.log(a);var temp = a + b; a = b;b = temp;
}
