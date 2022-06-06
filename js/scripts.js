"use strict";
var carrito = 0;

function addCarrito(valor) {
  carrito = carrito + valor;
  return carrito;
}
function finalizarCompra() {
  alert("el valor de la compra es:" + carrito);
}
