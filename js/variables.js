const urlJson = `js/stock.json`

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

fetch(urlJson)
    .then(response => response.json())
    .then(data => {
        for (contenido of data) {
            productos.push(contenido)
        }
    })
    .catch(err => console.log(err))
