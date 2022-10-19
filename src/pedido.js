import { obtenerCarritoStorage } from "./storage.js"

const procesarCompraBtn = document.getElementById('procesar-pedido')

procesarCompraBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (obtenerCarritoStorage().length === 0) {

        // agregar alerta
        Swal.fire({
            title: 'Carrito Vacio!',
            text: "Tu carrito de compras esta vacio!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok!'
          })
    } else {
        location.href = "compra.html"
    }
})

