//ciclos de repeticon//

/* 
for (var i = 1; i <= 5; i++) {
    alert("Hola " + i);
  }
 */

/*   for (var i = 1; i <= 1; i++) {
    alert("Yo soy tu padre " + i);
  }

  var n = parseInt(prompt ("ingrese un numero"));

  for(var i = 1; 1<= n; i++) {
 alert ("soy tu padre " +ig ); */
  /* } */
 /*   Solicitar al usuario que ingrese número positivo, y mostrar en un alert,
cuántos números hay que son pares.
Ej: El usuario ingresa 10.
"Hay 5 números que son pares" */

/* let num = parseInt (prompt("ingrese un numero positivo"));
let conunt = 0

if ( num >= 0 ) {
  for (let i = 0; i <= num; i++){
    if ( num % 2 === 0 ) {
      count++;
    }
  }
  alert("hay" + count + "numeros pares" );
} 
else {
  alert ("debe ingresar un numero positivo");
} */


let numero = parseInt(prompt("Ingrese un numero positivo:"));
let cantidadPares = 0;

for (let i = 1; i <= numero; i++) {
  if (i % 2 === 0) {
    cantidadPares++;
  }
}

alert("Hay " + cantidadPares + " números que son pares.");


//otro ejercicio

/* let number = parseInt(prompt("Ingrese un numero:"));

for (var i = 1; i <= 10; i++) {
  console.log(number + "x" + i + " = " + (number * i));
} */

//BUCLE INFINITO

/* document.write ("<h1> hola mundo </h1>");
for(var i = 10 ; 1>=0; i = i - 2){
  alert( i);
} */


document.write("<h2>");
for (var i = 10; i >= 0; i--) {
  document.write(i + "<br>");
}
document.write("Despegue!!</h2>");



