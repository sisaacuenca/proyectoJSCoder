const productos = [];
const carrito = [];

const listadoProductos = document.getElementById("listProducto");
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

class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
  precioFinal() {
    const IVA = 1.21;
    return parseFloat((this.precio * IVA).toFixed(2));
  }
}
function generarProductos() {
  productos.push(new Producto(0001, "MOUSE GENIUS", 500));
  productos.push(new Producto(0002, "TECLADO LOGITECH", 900));
  productos.push(new Producto(0003, "COOLER AUREOX", 1200));
  productos.push(new Producto(0004, "PROCESADOR INTEL CELERON", 2900));
  productos.push(new Producto(0005, "GEFORCE GT1030", 5000));
}
function generarCarrito() {
  carrito.push(new Producto(0001, "MOUSE GENIUS", 500));
  carrito.push(new Producto(0002, "TECLADO LOGITECH", 900));
  carrito.push(new Producto(0003, "COOLER AUREOX", 1200));
  return carrito;
}
function cargarProductos() {
  listadoProductos.innerHTML = "<h2>Nuestros Productos</h2>";

  for (const producto of productos) {
    const div = document.createElement("div");
    div.id = producto.id;
    div.innerText = producto.nombre + "-" + producto.precioFinal();
    div.innerHTML +=
      "<button id='add" + producto.id + "'>agregar al carrito</button>";

    listadoProductos.append(div);
  }
}
function cargarCarrito() {
  listCarro.innerHTML =
    "<h2>CARRITO<button id ='hideCarrito'>Ocultar Carrito</button></h2>";
  for (const carro of carrito) {
    const li = document.createElement("li");
    li.id = carro.id;
    li.innerText = carro.nombre + "-" + carro.precioFinal();
    listCarro.append(li);
  }
}
function ocultarCarrito() {
  listCarro.innerHTML = "";
}
