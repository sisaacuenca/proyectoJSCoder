const productos = [];
const carrito = [];
let opcion = 0;

const listadoProductos = document.getElementById("listProducto");
const listCarro = document.getElementById("carrito");
const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2");
const add3 = document.getElementById("add3");
const add4 = document.getElementById("add4");
const add5 = document.getElementById("add5");
const add6 = document.getElementById("add6");

const titulo = document.getElementById("titulo");
titulo.innerText = "PCSHOP";

add1.onclick = () => {
  addCarrito(1);
};
add2.onclick = function (e) {
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
  productos.push(new Producto(0004, "PARLANTES NOGA", 350));
  productos.push(new Producto(0005, "PROCESADOR INTEL CELERON", 2900));
  productos.push(new Producto(0006, "GEFORCE GT1030", 5000));
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
    const li = document.createElement("li");
    li.id = producto.id;
    li.innerText = producto.nombre + "-" + producto.precioFinal();

    const btn = document.createElement("button");
    btn.id = "add" + producto.id;
    btn.innerText = "Agregar al Carrito";
    listadoProductos.append(li);
    listadoProductos.append(btn);
  }
}
function cargarCarrito() {
  listCarro.innerHTML = "<h2>CARRITO</h2>";
  for (const carro of carrito) {
    const li = document.createElement("li");
    li.id = carro.id;
    li.innerText = carro.nombre + "-" + carro.precioFinal();
    listCarro.append(li);
  }
}
