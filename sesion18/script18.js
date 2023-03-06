/* //for 
for(inicializacion; condicion  ; actualizacionDePasos ){

}

//while
while(1(condicion) <= 2) {

    1++;
}

//do while
var i = 2;
hacer{
//intruccion1
//intruccion2
//intruccion3
mientras(1 < 1)
} */

/* Según un numero ingresado por el usario, mostrar la sumatoria total de todos los numeros hasta dicho numero, 
en un console.log()
Ej: El usuario ingresa 10

Sumatoria total = 55

Hacerlo con un for, while y con do-while */

/* var numero = prompt("Ingrese un numero: ");
var sumatoria = 0;

for(var i = 1; i <= numero; i++){
  sumatoria += i;
}

console.log("La sumatoria total es: " + sumatoria);

//////////////////////////////

var numero = prompt("Ingrese un numero: ");
var sumatoria = 0
var i = 1;

while(i <= numero){
  sumatoria += i;
  i++;
}

console.log("La sumatoria total es: " + sumatoria);

////////////////////////////////////////////

var numero = prompt("Ingrese un numero: ");
var sumatoria = 0;
var i = 1;

do{
  sumatoria += i;
  i++;
}while(i <= numero);

console.log("La sumatoria total es: " + sumatoria);


//slice//

var texto = "hola este es mi texto";
var palabra;
var palabra = texto.slice(5);

document.write(palabra); */

var texto = prompt ("Hola este es un texto");
var count = 0;


for ( var i = 0; i < texto.length; i++ ) {
    if( texto[i].toLowerCase() === 'a') {
     count++;
    }
  }
console.log(`El texto ingresado contiene ${count} letras "a"`);