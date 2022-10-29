import { pintarCarrito } from "./accionesCarrito.js";
import { actualizarTotalesCarrito } from "./actualizarCarrito.js";
import { obtenerCarritoStorage } from "./storage.js";
const botonVaciar = document.getElementById('Vaciar-carrito');

botonVaciar.addEventListener('click', () => {


    const carrito = obtenerCarritoStorage()

    const alerta1 = () => {
        Swal.fire({
            title: 'Estas seguro de quieres eliminar todos los productos de tu carrito?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'cancelar',
            confirmButtonText: 'Si, estoy seguro'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Productos eliminados!',
                    'El carrito se vacio correctamente',
                    'success'
                    

                )
                vaciar(carrito)
            }
        })
    }
    const alerta2= () => {
        Swal.fire({
            title: 'Carrito Vacio!',
            text: "Tu carrito de compras esta vacio!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
        })
    }
    carrito.length >= 1 ? alerta1() : alerta2()
    
})

const vaciar = (carrito) => {

    while (carrito.length > 0) {
        carrito.pop()
    }

    actualizarTotalesCarrito(carrito)
    pintarCarrito(carrito)
}






