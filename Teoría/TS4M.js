//Null Check Ternary
const obj1= {
    key: "First",
    key2: 3
}

let result = false;
if(obj1.key2){
    result=true;
}

let result1= obj1.key2 ? true: false;

//Caso #2
const result2= obj1.key2 || obj1.key3 ||"";

console.log(result2)

// Caso #3 de validad un null Check

const carro= {
    model:'2010',
    location:{
        pais:{
            name:'Colombia'
        },
        lat:123,
        long:345
    }
}
// Con el operador ternario preguntamos dentro de este objeto si existen los valores especificados.
// Y si no, simplemente asignamos lo que está entre comillas.
const Res3= carro.location ?. ciudad?.barrio || 'N/A'
console.log(Res3)

//CICLOS 

// #1 Do While


// Primero ejecuta el bloque de codigo y después pregunta por la condición
// Se usa para el control de errores.
/*do{
    //Todo
}while(condition)


//Primero pregunta por la condición.
while(condition){
    //TODO
}
*/


//# 2
// FOR IN FUNCIONA EXCLUSIVAMENTE PARA LOS OBJETOS

const numeros ={
    a:1,
    b:2,
    c:3
}
// Constante key, las llaves del objeto.
for (const key in numeros){
    console.log(`${key}: ${numeros[key]}`);
}

// #3 FOR

//for(let i=0, i<= arreglo.length;i++)

