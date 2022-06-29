import { productos } from "./stock.js";
import { carritoIndex } from "./carritoMenu.js";
const mostrarProductos = (productos) => {
  const contenedorProductos = document.getElementById("grid-productos");
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML +=
      '<div> class="card" style="width = 18rem;">  <div  <h5 >${$producto.nombre}</h5><p >precio:$ ${producto.precio}</p> <button id=boton${producto.id}>comprar</button>';
    contenedorProductos.appendChild(div);

    const boton = document.getElementById("boton${producto.id}");
    boton.addEventListener("click", () => {
      carritoIndex(producto.id);
      alert("se agrego ${producto.nombre}");
    });
  });
};
mostrarProductos(productos);
