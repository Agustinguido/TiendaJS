import { obtenerCarritoStorage } from "./storage.js";

const finalizarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('email');
const direccion = document.getElementById('direccion');

finalizarCompraBtn.addEventListener('click', (e) => {

    e.preventDefault();

    if (obtenerCarritoStorage().length === 0) {

        // agregar alerta
        Toastify({

            text: "esta vacio estupido",

            duration: 8000,
            stopOnFocus: false,

        }).showToast();

        location.href = "index.html"

    } else if (cliente.value === "" || correo.value === "" || direccion.value === "") {
        Toastify({

            text: "DATOS",

            duration: 8000,
            stopOnFocus: false,

        }).showToast();

    } else {
        const cargandoGif = document.querySelector('#cargando');
        cargandoGif.style.display = 'block';

        const enviado = document.createElement('img');
        enviado.src = 'img/mail.gif';
        enviado.style.display = 'block'
        enviado.width = '150';

        setTimeout(() => {
            cargandoGif.style.display = 'none'
            document.querySelector('#loaders').appendChild(enviado);
            setTimeout(() => {
                enviado.remove()
                localStorage.clear();
                window.location = "index.html"
            }, 2000)
        }, 3000)
    }
})