


export let carritoCompras = [];

export const carritoMenu = (productoId) => {
  const carritoContenedor = document.getElementById('carrito-contenedor');

  const renderProductoCarrito = () => {

    let producto = productos.find((producto) => producto.id == productoId);
    carritoCompras.push(producto);

    producto.cantidad -= 1;
    let div = document.createElement("div");
    div.classList.add("productoEnCarrito");
    div.innerHTML +=
      ` <div class="card" style="width: 18rem;">
                   <div class="card=body">
                        <h5 class=card-title>${producto.nombre}</h5>
                        <p class="card-text">precio:$  ${(producto.precio) * 1.21}</p> 
                        <button class="btn btn-danger" id=eliminar${producto.id}>eliminar</button>
                   </div>
      </div>`;
    carritoContenedor.appendChild(div);

    const eliminar = document.getElementById(`eliminar${producto.id}`)
    eliminar.addEventListener("click", () => {
      let eliminado = carritoCompras.find((carrito) => carrito.id == producto.id)
      console.log(eliminado)
      carritoCompras.pop(eliminado)
      contCarrito--
    })
    const btnVaciar = document.getElementById(`btnVaciar`)

    const actualizarCarrito = () => {
      carritoContenedor.innerHTML = ""
      carritoCompras = []
      contCarrito = 0
    }
    btnVaciar.addEventListener('click', () => {
      carritoCompras.length = 0
      actualizarCarrito()
    })



  };
  renderProductoCarrito();
};
