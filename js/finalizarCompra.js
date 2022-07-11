import { contCarrito, sumPrecio } from "./app.js";

const mostrarResumen = () => {
    const cerrarCompra = document.getElementById("resumen-compra")
    const p = document.createElement("p")
    p.innerHTML += `<p>El valor final de la compra es de: $ ${sumPrecio}
                       y la cantidad de productos elegidos es: ${contCarrito}</p>`
    cerrarCompra.appendChild(p)



}

