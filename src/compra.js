import { obtenerCarritoStorage } from "./storage.js";

const finalizarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('email');
const seguirComprando = document.getElementById('seguir-comprando');


seguirComprando.addEventListener('click', (e) =>{
    e.preventDefault();
    location.href = "index.html"
})

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
          }).then((result) => {
            if (result.isConfirmed) {
                location.href = "index.html" // al no haber productos para finalizar la compra te envia directamente a la pagina de productos
            }
        })
            

        

    } 
    else if (cliente.value === "" || correo.value === "") {
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
        enviado.classList.add('gif')
        enviado.src = 'img/mail.gif';
        enviado.style.display = 'block'
        enviado.width = '150';

        setTimeout(() => {
            cargandoGif.style.display = 'none'
            document.querySelector('#loaders').appendChild(enviado);
            Swal.fire({
                icon: 'success',
                title: 'Compra realizada con exito!!',
                showConfirmButton: false,
                timer: 1800
              })
            setTimeout(() => {
                enviado.remove()
                localStorage.clear();
                window.location = "index.html" // una vez finalizada la compra te retorna al inicio
               
            }, 3000)
        }, 6000)
    }
})