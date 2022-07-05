import { productos } from "./stock.js";
import { contCarrito, sumPrecio } from "./app.js";
import { carritoMenu } from "./carritoMenu.js"

const mostrarResumen = () => {
    const cerrarCompra = document.getElementById("resumen-compra")
    const p = document.createElement("p")
    p.innerHTML += `<p>El valor final de la compra es de: $ ${sumPrecio}`
    cerrarCompra.appendChild(p)



}

