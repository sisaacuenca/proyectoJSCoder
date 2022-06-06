"use strict";

function init() {
  var carrito = 0;
  var btn1 = document.getElementById("btn1");
  btn1.onclick = function (e) {
    addCarrito(carrito, 500);
  };
  function addCarrito(carrito, valorA) {
    carrito = carrito + valorA;
    console.log("agregado producto 1 a carrito");
    return carrito;
  }
}
