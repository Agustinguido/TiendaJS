const guardarCarritoStorage = (carritoDeCompras) => {
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
};

const obtenerCarritoStorage = () => {
    let productoLS;

    //Comprobar si hay algo en LS
    if(localStorage.getItem('carrito') === null){
        productoLS = [];
    }
    else {
        productoLS = JSON.parse(localStorage.getItem('carrito'));
    }
    return productoLS;
};

  

export { guardarCarritoStorage, obtenerCarritoStorage };