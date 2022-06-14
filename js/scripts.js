const productos = [];
const carrito = [];
let opcion = 0;

function elegirProducto() {
  opcion = prompt("elija producto del 1 al 6");
  opcion -= 1;
  carrito.push(productos[opcion - 1]);
}

function addProducto() {
  let id = crearID();
  let nombre = prompt("ingrese nombre del producto");
  let precio = parseInt(prompt("ingrese precio del producto"));
  productos.push(new Producto(id, nombre.toUpperCase(), precio));
}

class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
  precioFinal() {
    return parseFloat((this.precio * IVA).toFixed(2));
  }
}
function listarProductos() {
  productos.forEach((producto) => {
    console.table(producto);
  });
}
function listarCarrito() {
  carrito.forEach((carro) => {
    console.table(carro);
  });
}
function buscarProducto() {
  let idBuscada = parseInt(prompt("ingrese la ID del producto a buscar"));
  const buscado = productos.find((producto) => producto.id === idBuscada);
  console.log(buscado);
}
function addCarrito() {
  let idAgregar = parseInt(prompt("ingrese la ID del producto a agregar"));
  const existe = productos.some((producto) => producto.id === idAgregar);
  if (existe) {
    carrito.push(productos.find((producto) => producto.id === idAgregar));
  } else {
    console.log("no existe el producto solicitado");
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
}
function crearID() {
  return parseInt(Math.random() * 10000);
}

function verCarrito() {
  carrito.forEach((prod) => {
    console.log(carrito.nombre + " " + carrito.precio);
  });
}
