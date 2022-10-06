
const contenedorProductos = document.getElementById('producto-contenedor')

let carrito = [];

const ContainerCart = document.querySelector(".Carrito-contenedor");

const botonVaciar = document.getElementById('vaciar-carrito');

const precioTotal = document.getElementById('TotalCart') 

const contadorCarrito = document.getElementById('acc')

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
localStorage.clear();
    actualizarCarrito();
     
})




stockProductos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Descripción:  ${producto.desc}</p>
                                <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id=agregar${producto.id}>Comprar</button>
                            </div>
                        </div>`


    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`);

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
 contadorCarrito.innerText = carrito.length
})

const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item);
    actualizarCarrito();
    console.log(carrito)


}

const eliminarDelCarrito = (prodId) => {

    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);

    actualizarCarrito()

}


function actualizarCarrito() { //Cada vez que presiono click guardo en la variable todos los productos
    ContainerCart.innerHTML = ""//Cada vez que se ejecute esta accion quedara vacia 
    carrito.map(item => {
        const trElement = document.createElement("tr");
        trElement.classList.add("ItemCart")
        const content = `
        <th scope="row"><input type="number" min="1" value=${item.cantidad} class="ElementCount" width=60></th>
        <td class="cartProducts"><img class="imgProductCart" src="${item.img}" alt="" width=100>  <h6 class="title">${item.nombre}</h6></td>
        <td class="CartPrecio"> ${item.precio}</td>
       <button onclick="eliminarDelCarrito(${item.id})" class="botonEliminar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
       <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
       <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
     </svg></button>
        `
        trElement.innerHTML = content
        ContainerCart.append(trElement)

        localStorage.setItem('carrito', JSON.stringify(carrito))


    })
    
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((contadorCarrito, prod) => contadorCarrito + prod.precio,0)
}