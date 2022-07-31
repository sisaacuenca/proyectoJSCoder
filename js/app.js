const URLjson = `js/stock.json`
const productContainer = document.querySelector("#productConteiner")

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//-------------------Declaracion de clase producto---------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------

class Producto {
  constructor(id, nombre, img, precio, cantidad) {
    this.id = id
    this.nombre = nombre
    this.img = img
    this.precio = precio
    this.cantidad = cantidad
  }
}
const productos = []
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//-------------------------Carga de Productos--------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------

const traerProductos = (contenido) => {

  const { id, nombre, img, precio } = contenido
  return `<div class="card col-3" style:"width: 18rem;">
          <img src="${img}" class="card-img-top" alt="imagen representativa de producto">
          <div class="card-body">
              <h5 class="card-title">${nombre}</h5>
              <p class="card-text">Precio:$ ${(precio) * 1.21}</p>
              <button class="boton btn btn-primary" id=boton${id}>Comprar</button>
          </div>
      </div>`
    ;
}

const retornoCardError = () => {
  return `<div class="center white-text"> 
              <br><br><br><br> 
              <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
              
          </div>`
}

const obtenerContenido = (URL) => {
  let cardProductos = ""
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {

      for (contenido of data) {
        cardProductos += traerProductos(contenido)
        productos.push(contenido)
      }



      productContainer.innerHTML = cardProductos
    })
    .catch(() => productContainer.innerHTML = retornoCardError())
}
console.table(productos)
obtenerContenido(URLjson)

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//--------------------------Carga de Carrito---------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------


const carrito = []

const boton = document.querySelectorAll(".boton")

const cartContainer = document.querySelector("#cartContainer")
const contadorCarrito = document.querySelector("#contador-carrito")
let contCart = 0;

boton.forEach(elm => {
  elm.addEventListener("click", (e) => {
    let resultado = e.target.id
    busquedaArray(resultado)
    swal({
      title: `${elm.nombre}`,
      text: "Se agrego exitosamente al carrito",
      icon: "success",
      button: "Confirmar",
    });
  })
})


function busquedaArray(id) {
  let resultado = productos.filter(elm => elm.id == id)
  console.log(resultado[0])
  carrito.push(resultado[0])
  renderizarCarrito(resultado)
}

function renderizarCarrito(obj) {
  obj.forEach(obj => {
    const listado = document.createElement("li")
    listado.className = "listadoProductos"
    listado.innerHTML += `${obj.nombre}<button type="button" class="btn btn-danger" id="${obj.id}">Eliminar</button>`
    cartContainer.appendChild(listado)
    contCart++;
    contadorCarrito = contCart

  })
}


;
/*

const productos = [
  {
    id: 1,
    nombre: "MOUSE GENIUS DX-110 USB",
    img: 'img/mouse.jpg',
    precio: 300,
    cantidad: 3,
  },
  {
    id: 2,
    nombre: "TECLADO LOGITECH K210 QWERTY ESPAÑOL LATAM",
    img: 'img/teclado.jpeg',
    precio: 970,
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "COOLER CPU COOLER MASTER HYPER 212 PARA ZOCALO INTEL",
    img: 'img/cooler.jpeg',
    precio: 5300,
    cantidad: 2,
  },
  {
    id: 4,
    nombre: "PROCESADOR INTEL CELERON G5905 3.5GHz",
    img: 'img/celeron.jpeg',
    precio: 5500,
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "NVIDIA ASUS GEFORCE GT1030",
    img: 'img/gt1030.jpeg',
    precio: 15000,
    cantidad: 2,
  },
];
const carritoRenderizado = document.getElementById("cartContainer")

function renderizarCarrito(obj) {
  obj.forEach(obj => {
    const listado = document.createElement("li")
    listado.className = "cartContainer"
    listado.innerHTML += `${obj.nombre}<button type="button" class="btn btn-danger" id="${obj.id}">Eliminar</button>`
    carritoRenderizado.appendChild(listado)
  })

}


document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    busquedaArrayEliminar(e.target.id)
  }

})




const botonEliminar = document.getElementsByClassName("btn-danger")

contenedorProductos.appendChild(div);

const boton = document.getElementById(`boton${producto.id}`)
boton.addEventListener("click", () => {

  for (const iterator of productos_data) {
    if (iterator.nombre === nombre) {
      sessionStorage.setItem('producto_' + cero, JSON.stringify({ iterator }))
    }
  }
  swal({
    title: `${producto.nombre}`,
    text: "Se agrego exitosamente al carrito",
    icon: "success",
    button: "Confirmar",
  });
  contCarrito++
  sumPrecio += (producto.precio) * 1.21
  const botonCarrito = document.getElementById("contador-carrito")
  botonCarrito.innerText = contCarrito*/