import { productos } from './stock.js'
import { carritoMenu } from "./carritoMenu.js"
let contCarrito = 0
let sumPrecio = 0
const mostrarProductos = (productos) => {
  const contenedorProductos = document.getElementById("producto-contenedor");
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML +=
      `<div class="card" style="width: 18rem;">
          <img src="${producto.img}" class="card-img-top" alt="imagen representativa de producto">
          <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">Precio:$ ${(producto.precio) * 1.21}</p>
              <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>
          </div>
      </div>`
      ;

    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`)
    boton.addEventListener("click", () => {
      carritoMenu(producto.id)
      swal({
        title: `${producto.nombre}`,
        text: "Se agrego exitosamente al carrito",
        icon: "success",
        button: "Confirmar",
      });
      contCarrito++
      sumPrecio += (producto.precio) * 1.21
      const botonCarrito = document.getElementById("contador-carrito")
      botonCarrito.innerText = contCarrito
    });
  });
};
mostrarProductos(productos);
export { contCarrito, sumPrecio }
