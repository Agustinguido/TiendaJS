import { obtenerCarritoStorage } from "./storage.js"

const procesarCompraBtn = document.getElementById('procesar-pedido')

procesarCompraBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (obtenerCarritoStorage().length === 0) {

        // agregar alerta
        Toastify({

            text: "esta vacio estupido",
            
            duration: 1000,
            stopOnFocus: false,
            
            }).showToast();
    } else {
        location.href = "compra.html"
    }
})

