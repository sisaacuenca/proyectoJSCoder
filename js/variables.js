/*import { productos } from "./stock.js";
const carrito = [];

const listCarro = document.getElementById("carrito");

const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2");
const add3 = document.getElementById("add3");
const add4 = document.getElementById("add4");
const add5 = document.getElementById("add5");
const irCarrito = document.getElementById("irCarrito");
const hideCarrito = document.getElementById("hideCarrito");

const titulo = document.getElementById("titulo");
titulo.innerText = "PCSHOP";
add1.onclick = () => {
  addCarrito(1);
};
add2.onclick = () => {
  addCarrito(2);
};
add3.onclick = () => {
  addCarrito(3);
};
add4.onclick = () => {
  addCarrito(4);
};
add5.onclick = () => {
  addCarrito(5);
};
irCarrito.onclick = () => {
  cargarCarrito();
};
hideCarrito.onclick = () => {
  ocultarCarrito();
};

class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
  precioFinal() {
    const IVA = 1.21;
    return parseFloat((this.precio * IVA).toFixed(2));
  }
}


function cargarCarrito() {
  listCarro.innerHTML =
    '<h2>CARRITO<button id ="hideCarrito">Ocultar Carrito</button></h2>';
  carrito.forEach((carro) => {
    const li = document.createElement("li");
    li.id = carro.id;
    li.innerText = carro.nombre + "-" + carro.precioFinal();
    listCarro.append(li);
  });
}
function ocultarCarrito() {
  listCarro.innerHTML = "";
}

mostrarProductos(productos);
*/
