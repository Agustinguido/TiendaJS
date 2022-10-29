import { eliminarProductoCarrito } from "./accionesCarrito.js";
import { guardarCarritoStorage } from "./storage.js";


const actualizarTotalesCarrito = (carrito) => {
    let totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const totalCompra = carrito.reduce((acc, item) => acc + (item.cantidad * item.precio), 0);

    pintarTotalesCarrito(totalCantidad, totalCompra);
    guardarCarritoStorage(carrito);
};

const pintarTotalesCarrito = (totalCantidad, totalCompra) => {
    const contadorCarrito = document.getElementById('acc');
    const precioTotal = document.getElementById('TotalCart');


    contadorCarrito.innerText = totalCantidad;
    precioTotal.innerText = totalCompra;
};





export{ actualizarTotalesCarrito};