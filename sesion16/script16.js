/* var x = 10

if ( x <9){
    alert("es menor que 10")
}else{
    alert("es mayor o igual que 10")
}

//swicht

switch (x){
    case 10:
        alert ("el valor es 10");
        break;

    case 9:
    alert ("el valor es 9");
    break;
    
    case 7:
    alert ("el valor es 7");
    break;

    default: 
    alert ("el valor es otro numero");
} */

var num1 = 20;
var num2 = 4;
var num3 = num1 % num2;

switch (resto){
    case 0:
        alert(num1 + "es divisible por" + num2);
    break;

    case 1:
        alert ("los numeros no son divisibles");
        break;
    default:
        alert ("estoy en esta opcion" + resto);
}

var mes = prompt("ingrese un mes");

switch(mes){
    case 2:
        alert ("el mes tiene 28 dias");
        break;
    case "feb":
        alert ("el mes tiene 28 dias");
        break;
    case "febrero":
        alert ("el mes tiene 28 dias");
        break;
    default:
        alert ("el mes tiene mas de 28 dias")
}

alert("El valor es otro numero");
}

/*
var mes = prompt("Ingrese una opción: \n 1 - Suma \n 2 - Resta");
switch (mes) {
@@ -37,6 +38,7 @@ switch (mes) {
  default:
    alert("El mes tiene más de 28 días");
}
*/

/*
Tomar el codigo de la calculadora, y hacer un "menú" donde si el usuario ingresa:
@@ -46,4 +48,55 @@ Tomar el codigo de la calculadora, y hacer un "menú" donde si el usuario ingres
 - Opción 4 ---> División
 - Otro ---> Mensaje de error
 */
*/

var menu = parseInt(
  prompt(
    "Ingrese una opción: \n\n 1)Suma \n 2)Resta \n 3) Multiplicación \n 4) División"
  )
);

if (menu >= 1 && menu <= 4) {
  var num1 = parseFloat(prompt("Ingrese el primer número"));
  var num2 = parseFloat(prompt("Ingrese el segundo número"));
}
var total;
var operacion;

switch (menu) {
  case 1:
    //Suma
    total = num1 + num2;
    operacion = "suma";
    break;

  case 2:
    //Resta
    total = num1 - num2;
    operacion = "resta";
    break;

  case 3:
    //Multiplicación
    total = num1 * num2;
    operacion = "multiplicación";
    break;

  case 4:
    //Divisón
    if (num2 != 0) {
      total = num1 / num2;
      operacion = "división";
    } else {
      alert("No se puede dividir por cero");
    }

    break;

  default:
    alert("No ingresó una opción válida");
}

if (menu >= 1 && menu <= 4) {
  alert("El resultado de la " + operacion + " es igual a " + total);
}