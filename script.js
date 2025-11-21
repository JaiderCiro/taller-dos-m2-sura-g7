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

//Ejercicio #4

let productos = [{nombre: "Camisa", stock: 10}, {nombre: "Zapatos", stock: 0}, {nombre: "Pantalón", stock: 5}];
console.log(productos);

let enStock = productos.filter(productos => productos.stock > 0);
console.log(enStock);

//Ejercicio #5

let ventas = [150, 300, 100, 50];
console.log(ventas);

let totalVentas = ventas.reduce((acumulador, venta) => acumulador + venta, 0);
console.log(totalVentas);

//Ejercicio #6

let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];
console.log(grupos);

let listaPlana = grupos.reduce((acumulador, resultado) => acumulador.concat(resultado));
console.log(listaPlana);

//Ejercicio #7

let original = ["A", "B", "C"];
console.log(original);

let clon = original.slice();
clon.push("D");
console.log(clon);

//Ejercicio #8

let competidores = ["Oro", "Plata", "Bronce", "Mención 1", "Mención 2"];
console.log(competidores);

let podio = competidores.slice(0, 3);
console.log(podio);

//Ejercicio #9

let equipoDev = ["Ana", "Juan"];
console.log(equipoDev);

let equipoQA = ["Carlos", "Maria"];
console.log(equipoQA);

let equipoCompleto = equipoDev.concat(equipoQA)
console.log(equipoCompleto);

//Ejercicio #10

let carrito = ["Manzana"];
console.log(carrito);

let nuevoCarrito = carrito.concat("pera")
console.log(nuevoCarrito);

//Ejercicio #11

let roles = ["USER", "EDITOR"];
console.log(roles);

let Admin = roles.includes("ADMIN");
console.log(Admin);

let Editor = roles.includes("EDITOR"); 
console.log(Editor);


