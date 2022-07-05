const modalContenedor = document.querySelector('.modal-container');

const abrirCarrito = document.getElementById('finalizar')

const cerrarCarrito = document.getElementById('cerrarModal')

const modalCarrito = document.querySelector('.modal-resumen')




abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
})

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active')
})

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click();
})

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();
})