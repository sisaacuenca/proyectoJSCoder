generarProductos();
generarCarrito();
cargarProductos();
cargarCarrito();

function addProducto() {
  let id = crearID();
  let nombre = prompt("ingrese nombre del producto");
  let precio = parseInt(prompt("ingrese precio del producto"));
  productos.push(new Producto(id, nombre.toUpperCase(), precio));
  return productos;
}

function addCarrito(addId) {
  const existe = productos.some((producto) => producto.id === parseInt(addId));
  if (existe) {
    carrito.push(productos.find((producto) => producto.id === addId));
    console.log();
  } else {
    console.log("no existe el producto solicitado");
  }
  cargarCarrito();
  console.table(carrito);
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

function crearID() {
  return parseInt(Math.random() * 10000);
}
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
