const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = [];

fetch('../producto.json')
.then(respuesta => respuesta.json())
.then((resultado)=>{

    productos = resultado.productos

    CargarProductos(productos)

})
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
botonVaciar.addEventListener('click', () => {
    Swal.fire({
        title: 'Estás seguro de vaciar el carrito?',
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: 'blue',
        cancelButtonColor: 'red',
        confirmButtonText: 'Si, vacíalo!',
        cancelButtonText: 'Cancelar',
        allowEnterKey: true
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Vaciado!',
            'Tu pedido ha sido eliminado.',
            'success'
          )
        }
      })
    carrito.length = 0
    localStorage.removeItem('carrito');
    actualizarCarrito()
})

function CargarProductos(productos){

    productos.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('col-9','border','bg-white', 'rounded', 'mt-5','mb-5', 'd-flex', 'align-items-center', 'producto')
        div.innerHTML = `
            <div class="w-50">
                <img src=${producto.img} alt="pepperoni" height="200">
            </div>
            <div class="d-flex flex-column m-0">
                <h3 class="NombreProducto">
                    ${producto.nombre}
                </h3>
                <p class="descripcion">
                    ${producto.descripcion}
                </p>
            </div>
            <div class="d-flex align-item-end justify-content-end flex-column">
                <p class="precioProducto">
                    $${producto.precio}
                </p>
                <button id="agregar${producto.id}" class="boton-agregar">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        
        `
        
        contenedorProductos.appendChild(div); 
        const button = document.getElementById(`agregar${producto.id}`);
    
        button.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
            Toastify ({
                text: 'Se agregó el producto',
                duration: 2000,
                gravity: 'bottom',
                position: 'right',
                style: {
                    background: '#A10035'
                }
            }).showToast();
        })
        
    })

}


const agregarAlCarrito = (prodId) => {

    const existe = carrito.some (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = productos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
  
    actualizarCarrito() 
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item); 
    carrito.splice(indice, 1);
    actualizarCarrito(); 
    console.log(carrito);
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "" 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length 
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    
}

/* botones */



 /*     const button = document.getElementById(`agregar${producto.id}`);
    
        button.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
            Toastify ({
                text: 'Se agregó el producto',
                duration: 2000,
                gravity: 'bottom',
                position: 'right',
                style: {
                    background: '#A10035'
                }
            }).showToast();
        })
 */