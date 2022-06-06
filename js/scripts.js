"use strict";
var carrito = 0;
const valores = [500, 900, 1200, 350, 2900, 5000];
var opcion;
function elegirProducto() {
  opcion = prompt("elija producto del 1 al 6");
  opcion -= 1;
  addCarrito(valores[opcion]);
}
function addCarrito(valor) {
  carrito = carrito + valor;
  return carrito;
}
function verCarrito() {
  alert("el monto actual del carrito es de :  " + carrito);
}
function finalizarCompra() {
  alert("el valor de la compra es:" + carrito);
}
