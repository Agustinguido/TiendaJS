import { actualizarTotalesCarrito } from "./actualizarCarrito.js";
import { stockProductos } from "./stock.js";
import { obtenerCarritoStorage } from "./storage.js";

let carrito = [];

const validarProductoRepetido = (productoId) => {
    
     if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
    }

    const productoRepetido = carrito.find(producto => producto.id === productoId);

    if (productoRepetido) {
        productoRepetido.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `${productoRepetido.cantidad}`;
        actualizarTotalesCarrito(carrito);
    } else {
        agregarAlCarrito(productoId);
    }
    
    Toastify({

        text: "Agregado a carrito",
        
        duration: 1300,
        stopOnFocus: false,
        
        }).showToast();

};


const agregarAlCarrito = (productoId) => {
    const contenedor = document.getElementById('Carrito-contenedor')
    const producto = stockProductos.find(producto => producto.id === productoId);
    carrito.push(producto)


    contenedor.innerHTML = '';//Cada vez que se ejecute esta accion quedara vacia 
    carrito.map(item => {
        const trElement = document.createElement("tr");
        trElement.classList.add("ItemCart")
        const content = `
        <th scope="row" id=cantidad${item.id}><span class="ElementCount" width=60>${item.cantidad} </span></th>
        <td class="cartProducts"><img class="imgProductCart" src="${item.img}" alt="" width=100>  <h6 class="title">${item.nombre}</h6></td>
        <td class="CartPrecio">$${item.precio}</td>
       <button type="button" id=eliminar${item.id} value='${item.id}' class="boton-eliminar">x</button>
        `;

        trElement.innerHTML = content
        contenedor.append(trElement)

        actualizarTotalesCarrito(carrito)
        

    })
};



const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById('Carrito-contenedor')
    contenedor.innerHTML = '';//Cada vez que se ejecute esta accion quedara vacia 
    carrito.map(item => {
        const trElement = document.createElement("tr");
        trElement.classList.add("ItemCart")
        const content = `
        <th scope="row" id=cantidad${item.id}><span class="ElementCount" width=60>${item.cantidad} </span></th>
        <td class="cartProducts"><img class="imgProductCart" src="${item.img}" alt="" width=100>  <h6 class="title">${item.nombre}</h6></td>
        <td class="CartPrecio">$${item.precio}</td>
       <button type="button" id=eliminar${item.id} value='${item.id}' class="boton-eliminar">x</button>
        `;

        trElement.innerHTML = content
        contenedor.append(trElement)

    })
};

const eliminarProductoCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id != productoId)

    actualizarTotalesCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);

    Toastify({

        text: "Producto Eliminado",
        
        duration: 1000,
        stopOnFocus: false,
        
        }).showToast();
};


export { validarProductoRepetido, agregarAlCarrito, pintarCarrito, eliminarProductoCarrito }