//EJERCICIOS 2: ARREGLOS 
/* 
1. Crear un array vacío, luego generar 10 números al azar y 
guardarlos en un array. Mostrar en consola el resultado del array.
*/

//INICIO - Array vacio
 var arr = [];
var arrnumero = [ 5, 4, 4, 2, 1, 6, 6, 8, 9, 1]

//Resultado
console.log("Diez números al azar: " + arrnumero)


/*
2. El usuario deberá ingresar un string con varias palabras separadas 
por coma en un popup y se deben convertir en un array, 
(el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). 
Mostrar en consola dicho resultado.
*/

//INICIO - convertir string's a un array 
var string = '1,2,3,4,5'; 
var arr =  string.split(',');

//Resultado:
console.log(arr); 

/*
3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: 
El arreglo ordenado de menor a mayor, muestra el número menor y 
el número mayor. Tip: Busca en google los métodos de JavaScript 
que regresan el mayor y menor elemento de un arreglo.
*/

//INICIO
var numeros = [10,40,30,20,15,5];
numeros.sort(function(a, b){return a - b}); // --> 5, 10, 15...

//Resultado:
console.log(numeros); 

/*Nota: JavaScript ordena los números alfabéticamente por eso Afortunadamente, 
podemos complementar el método sort() con una función de comparación básica que haga el truco:
function(a, b) {return a - b} 
*/