import { eliminarProductoCarrito } from "./accionesCarrito.js";


const modalCarrito = document.getElementById('Carrito-contenedor')


modalCarrito.addEventListener('click', (e) => {
   e.stopPropagation();
   e.preventDefault();

   if(e.target.classList.contains('boton-eliminar')){
    eliminarProductoCarrito(e.target.value)
   };

});
