import { validarProductoRepetido } from "./src/accionesCarrito.js";

const mostrarProductos = (stockProductos) =>{
const contenedorProductos = document.getElementById('producto-contenedor')

stockProductos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-desc">${producto.desc}</p>
                                <p class="card-text"> $ ${producto.precio}</p>
                                <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>
                            </div>
                        </div>`


    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`boton${producto.id}`)
    boton.addEventListener('click', () => {
        validarProductoRepetido(producto.id)
    })
});
};

export { mostrarProductos}
