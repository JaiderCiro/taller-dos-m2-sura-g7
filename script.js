//Ejercicio #1

let puntos = [10, 20, 30, 40];
console.log(puntos);

let puntosDoble = puntos.map(numero => numero * 2);
console.log(puntosDoble);

//Ejercicio #2

let usuarios = [{id: 1, nombre: "Ana"}, {id: 2, nombre: "Luis"}, {id: 3, nombre: "Carlos"}];
console.log(usuarios);

let nombres = usuarios.map(usuarios => usuarios.nombre);
console.log(nombres);

//Ejercicio #3

let notas = [8, 5, 10, 3, 7];
console.log(notas);

let Aprobadas = notas.filter(nota => nota >= 6);
console.log(Aprobadas);
