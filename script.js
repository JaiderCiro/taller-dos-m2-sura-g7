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


//Ejercicio #12

let usuarios = [{id: 101, nombre: "Ana"}, {id: 102, nombre: "Luis"}, {id: 103, nombre: "Carlos"}];
console.log(usuario);

let usuarioLuis = usuarios2.find((usuario) => usuario.id == 102)
console.log(usuarioLuis);


//Ejercicio #13

let invitados = ["Zapata", "Alvarez", "Gomez", "Bernal"];
console.log(invitados);

let invitadosOrdenados =[...invitados].sort();
console.log(invitadosOrdenados);

//Ejercicio #14

let receta = ["Paso 1", "Paso 2", "Paso 3"];
console.log(receta);

let recetaInversa = [...receta].reverse();
console.log(recetaInversa);

//Ejercicio #15

let fila = ["Ana", "Luis", "Carlos", "Maria"];
console.log(fila);

let nuevaFila = fila.filter((nombre) => nombre !== "Luis")
console.log(nuevaFila);


//Ejercicio #16

let fila = ["Ana", "Luis", "Carlos", "Maria"];
console.log(fila);

let nuevaFilaConJorge = [...fila.slice(0,1), "Jorge", ...fila.slice(1)];
console.log(nuevaFilaConJorge);


//Ejercicio #17

let tablero = ["X", "O", "X"];
console.log(tablero);

let nuevoTablero = tablero.map((valor, index) =>
  index === 1 ? "X" : valor
);
console.log(nuevoTablero);

//Ejercicio #18

let productos = [{nombre: "Papas", precio: 2}, {nombre: "Carne", precio: 15}, {nombre: "Leche", precio: 3}];
console.log(productos);

let productosCaros = productos.filter(producto => producto.precio > 4).map(producto => producto.nombre);
console.log(productosCaros);