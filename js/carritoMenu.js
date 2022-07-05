import { productos } from "./stock.js";

let carritoCompras = [];

export const carritoMenu = (productoId) => {
  const carritoContenedor = document.getElementById('carrito-contenedor');

  const renderProductoCarrito = () => {

    let producto = productos.find((producto) => producto.id == productoId);
    carritoCompras.push(producto);
    let precioFinal = 0;
    precioFinal += producto.precio
    producto.cantidad = 1;
    let div = document.createElement("div");
    div.classList.add("productoEnCarrito");
    div.innerHTML +=
      ` <div class="card" style="width: 18rem;">
                   <div class="card=body">
                        <h5 class=card-title>${producto.nombre}</h5>
                        <p class="card-text">precio:$  ${producto.precio}</p> 
                        <button class="btn btn-danger" id=eliminar${producto.id}>eliminar</button>
                   </div>
      </div>`;
    carritoContenedor.appendChild(div);

  };
  renderProductoCarrito();
};
