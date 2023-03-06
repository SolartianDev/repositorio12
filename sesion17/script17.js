//var */

var num = prompt("Ingrese un numero:");
var count = 0;
var i = 0;

while (i <= num) {
  if (i % 2 === 0) {
    count++;
  }
  i++;
}

console.log("Hay " + count + " numeros pares.");
