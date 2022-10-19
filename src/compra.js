import { obtenerCarritoStorage } from "./storage.js";

const finalizarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('email');
const direccion = document.getElementById('direccion');

finalizarCompraBtn.addEventListener('click', (e) => {

    e.preventDefault();

    if (obtenerCarritoStorage().length === 0) {

        Swal.fire({
            title: 'Carrito Vacio!',
            text: "Tu carrito de compras esta vacio!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok!'
          })

        location.href = "index.html"

    } else if (cliente.value === "" || correo.value === "" || direccion.value === "") {
        Swal.fire({
            title: 'Completa los datos!',
            text: "Debes completar todos los campos para realizar la compra!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok!'
          })

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