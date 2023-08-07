/* El método length nos sirve para conocer el tamaño del arreglo.*/
const arreglo1= [1,2,3,4,5];
const arreglo2=[6,7,8,9];
console.log(arreglo1.length)

// La función at nos permite especificar la posición del arreglo y acceder al mismo

let prueba1= arreglo1.at(1);
console.log(prueba1)

// La función Concat nos permite sumar dos arreglos.
let combinarArreglo= arreglo1.concat(arreglo2)
console.log(combinarArreglo);

const nuevoArreglo= Array('Danisa','Moto');
console.log(nuevoArreglo)

// la función copiaWithin nos permite agregar unos parámetros que
// indican 

let copiaWithin= arreglo1.copyWithin(0,2,3);
console.log(copiaWithin);

// Este método 

const array1 = ['a', 'b', 'c','PerPerchas','hola'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);


console.log(iterator1.next().value);

console.log(iterator1.next().value);

console.log(iterator1.next().value);
console.log(iterator1.next().value);

// El método every() de JavaScript funciona en arreglos y 
// lo que hace es verificar si todos los elementos de un arreglo pasan un test. 

const arreglo = [35, 28, 31, 25, 29];
const test = (elemento) => elemento > 20;
arreglo.every(test); // true


/*
.filter()
Nos permite ejecutar una función por cada elemento y luego crear
un arreglo en base a los resultados de esa función. 
*/

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

/*El método fill() cambia todos los elementos en un arreglo por un valor estático, desde el 
índice start (por defecto 0) hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.
*/

const array2 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]


const nombres= ['Carlos','Rafel','Estefania','Rodrigo','Rafael','Gema','Diana','Sara',45];
/*
.find() Nos permite recorrer un arreglo y devuelve el primer  elemento
que retornemos.


const resultado= nombres.find((nombre) =>{
    if(nombre[0]=== 'E'){
        return nombre[0];
    }

});

console.log(resultado);
*/

/*El método findIndex() devuelve el índice del primer elemento de un array que
 cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
*/
 const array3 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array3.findIndex(isLargeNumber));
 //Expected output: 3



/* El findLast()método itera la matriz en orden inverso y devuelve el valor del primer elemento que satisface la función 
 de prueba proporcionada. Si ningún elemento satisface la función de prueba, undefinedse devuelve.*/



const found = array3.findLast((element) => element > 45);

console.log(found);
// Expected output: 130

/*El findLastIndex()método itera la matriz en orden inverso y devuelve el índice del primer elemento que satisface la 
función de prueba proporcionada. Si ningún elemento satisface la función de prueba, se devuelve -1.
*/



const isLargeNumber2 = (element) => element > 45;

console.log(array3.findLastIndex(isLargeNumber2));
// Expected output: 3
// Index of element with value: 130



/*El flat()método crea una nueva matriz con todos los elementos
 de la submatriz concatenados recursivamente hasta la profundidad especificada.
*/
 const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// Expected output: Array [0, 1, 2, Array [3, 4]]


/*
.forEach()
nos permite ejecutar una función por cada elemento.
*/

nombres.forEach((nombre,index) => {
  console.log(`Hola '${nombre},${index}`)
});


/*
.includes()
Nos permite saber si el arreglo contiene un elemento especificado.*/

console.log(nombres.includes('Carlos'));


/*.indexOf()
Obtenemos el primer index de un elemento.
Si no hay elemento nos retorna -1
lastIndexOf obtenemos el último del elemento que solicitemos.
*/

console.log(nombres.indexOf('Estefania'));


/*
.Join Nos permite transformar un arreglo a una cadena de texto y separar cada elemento.
*/

const colores=['Rojo', 'Verde', 'Azul'];

console.log(colores.join ('-'));



/*
El keys()método devuelve un nuevo objeto 
iterador de matriz que contiene las claves para cada índice de la matriz.
*/

const array5 = ['a', 'b', 'c','d'];
const iterator = array5.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2



/* El lastIndexOf()método devuelve el último índice en el que se puede encontrar un elemento dado en la matriz, o -1 
si no está presente. La matriz se busca hacia atrás, comenzando en fromIndex.*/

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// Expected output: 1


/*
.map()
Nos permite ejecutar una función por cada elemento, pero va a permitir
crear un nuevo arreglo con el resultado que obtengamos del anterior
recorrido. Importante decir que mostrará la misma cantidad de elementos
del arreglo original

const nombresMayuscula= nombres.map((nombre) =>{
    
   return nombres.toUpperCase();
});

console.log(nombresMayuscula);*/


// Pop y Push

colores.push('Pink');
console.log(colores);


colores.pop();
console.log(colores);



/*reduce() se utiliza para reducir un array a un solo valor, aplicando una
 función acumuladora en cada elemento del array. Esta función acumuladora toma dos argumentos: 
el acumulador actual y el elemento actual del array, y devuelve el nuevo valor acumulado. */

const numeros3 = [1, 2, 3, 4, 5];

// Sumar todos los elementos del array utilizando reduce
const sumaTotal = numeros3.reduce(function(acumulador, elementoActual) {
  return acumulador + elementoActual;
}, 0);

console.log(sumaTotal); // Output: 15


/* El reverse()método invierte una matriz en su lugar y devuelve la referencia a la misma matriz, el primer
 elemento de la matriz ahora se convierte en el último y el último elemento de la matriz se convierte en el primero. En otras palabras, 
 el orden de los elementos en el arreglo estará girado hacia la dirección opuesta a la establecida anteriormente.*/

 const array6 = ['one', 'two', 'three'];
console.log('array6:', array6);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array6.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array6:', array6);
// Expected output: "array1:" Array ["three", "two", "one"]


/* 
.shift() Para eliminar el primer elemento de un arreglo.
.unshift() Agregar un elemento a la primera posición.
*/

array6.shift()
console.log(array6)

array6.unshift('three')
console.log(array6)


/* 
.slice()
Nos permite copiar una parte  de un arreglo a otro.
-1er parámetro - Posición desde donde queremos copiar.
-2do parámetro - Hasta antes de que elemento copiar.
*/

const frutas = ['Fresa','Manzana','Pera','Banano'];
const frutasFavoritas= frutas.slice(1,3);
console.log(frutasFavoritas);



/*
.some()
Nos permite ejecutar un condicional sobre cada elemento y nos devuelve
true si algún elemento cumplió la condición.
*/
const HayFruta= (frutas)=>frutas==='Fresa';
console.log(frutas.some(HayFruta))


/* 
.Sort() Nos permite ordenar un arreglo de cadenas  de texto, de forma alfabetica.
.reverse() Ordena el arreglo de forma descendente.
*/

const letras =['a', 'b','d', 'c'];

console.log(letras.sort());


/*.splice()
-Nos permite insertar elementos a un arreglo donde lo especifiquemos.
-1er Parámetro- Posición donde queramos comenzar a insetar.
-2do Parámetro - si queremos eliminar elementos del arreglo desde la posición indicada.
- Resto de parámetros - Los elementos a insertar.

*/

const amigos=['Andres','Juan','Camilo'];
amigos.splice(1,2,'Roberto','Pericles');
console.log(amigos);

/*
El toLocaleString()método devuelve una cadena con una representación sensible al idioma de esta fecha. En implementaciones
 con soporte Intl.DateTimeFormatde API , este método simplemente llama a Intl.DateTimeFormat.*/

 const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
// Expected output: "20/12/2012, 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event.toLocaleString('ko-KR', { timeZone: 'UTC' }));
// Expected output: "2012. 12. 20. 오전 3:00:00"


/*
.toString() nos permite transformar un arreglo a una cadena de texto*/

frutas.toString();
console.log(frutas.toString())

/*El values()método devuelve un nuevo objeto iterador de matriz que itera el valor de cada
 elemento de la matriz.*/

 const array7 = ['a', 'b', 'c'];
 const iterator2 = array7.values();
 
 for (const value of iterator2) {
   console.log(value);
 }
 
 // Expected output: "a"
 // Expected output: "b"
 // Expected output: "c"