// Promise, una tarea que queda pendiente, esa promesa tiene dos caminos
//.then() Quiere decir que toma el camino de resolverse
//.catch Toma el camino de no resolverse
// Se declara:

const promesa= new Promise((resolve,reject)=>{
    resolve();// If promise is Ok
    reject();// if promise is falls
});

promesa.then((data)=>{
    console.log(data)
}).catch(err =>{
    console.log(err)
})

//Invocar una Api es invocar un servicio que está expuesto afuera
// en otro servidor.


/* Async- Await

Función que se declara con la palabra Async, vuelve el código asincro,
tiene que cumplirse una promesa para seguir ejecutándose.

Después sí puedo utilizar await, con esto el codigo espera a que
se cumpla una petición.

fetch= ir al servidor y traer la información.*/