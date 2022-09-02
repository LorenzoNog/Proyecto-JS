// Constantes 
const tarjeta = document.querySelector('#tarjetaCredito');
const botonAbrirForm = document.getElementById('botonAbrirForm');
const formPago = document.querySelector('#FormPago');
const ActualYear = new Date().getFullYear();
const ccv = document.querySelector('#tarjetaCredito .ccv');
const botonPagar = document.getElementById('botonPagar');

//
formPago.addEventListener('submit',function(e){
    e.preventDefault();
})

function enviarFormulario() {
    formPago.reset();
    Swal.fire ({
        icon: 'success',
        title: 'Tu pago se ha realizado con éxito! en breve nos contactamos contigo.',
        showConfirmButton: false,
        timer: 4000
    })
}

//animacion tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.style.transform = 'rotateY(360deg)'
});

// boton abrir form

botonAbrirForm.addEventListener('click',()=>{
    botonAbrirForm.style.transform = 'rotate(360deg)';
    formPago.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
})

// select

// select mes
for(let i=1 ; i<=12; i++){

    let option = document.createElement('option');
    option.value = i;
    option.innerText = option.value;
    
    formPago.selectMes.appendChild(option);
}

//select anio

for (let i=ActualYear; i<= ActualYear + 8; i++){

    let option = document.createElement('option');
    option.value = i;
    option.innerText = option.value;
    
    formPago.selectAnio.appendChild(option);

}

//numero tarjeta

formPago.inputNumero.addEventListener('keyup',(e)=>{
    let valorInput = e.target.value;

    // quitando espacios en blanco, letras y agrupando de a 4 digitos
    formPago.inputNumero.value = valorInput
    .replace(/\s/g,'')
    .replace(/\D/g,'')
    .replace(/([0-9]{4})/g,'$1 ')
    .trim();

    if(valorInput == ''){
        Toastify ({
            text: 'Ingrese el número de su tarjeta',
            duration: 2000,
            gravity: 'bottom',
            position: 'center',
            style: {
                background: '#A10035'
            }
        }).showToast();
    }
})

// nombre tarjeta

formPago.inputNombre.addEventListener('keyup',(e)=>{

    let valorInput = e.target.value;
    //evitamos numeros
    formPago.inputNombre.value = valorInput.replace(/[0-9]/g,'')

    if(valorInput == ''){
        Toastify ({
            text: 'Introduzca el nombre del titular de la tarjeta',
            duration: 2000,
            gravity: 'bottom',
            position: 'center',
            style: {
                background: '#A10035'
            }
        }).showToast();
    }
})

// CCV

formPago.inputCCV.addEventListener('keyup',(e)=>{
    
    let valorInput = e.target.value;

    // quitando espacios en blanco y letras
    formPago.inputCCV.value = valorInput
    .replace(/\s/g,'')
    .replace(/\D/g,'')
    .trim();
})

// Email
formPago.inputEmail.addEventListener('keyup',(e)=>{
    
    let valorInput = e.target.value;
    //evitamos numeros
    formPago.inputEmail.value = valorInput
    .replace(/\s/g,'')
    .trim()
   
    if (valorInput === "") {
        Toastify ({
            text: 'Introduzca un mail.',
            duration: 2000,
            gravity: 'bottom',
            position: 'center',
            style: {
                background: '#A10035'
            }
        }).showToast();
    } 
})

//telefono

formPago.inputTelefono.addEventListener('keyup',(e)=>{
    
    let valorInput = e.target.value;

    // quitando espacios en blanco y letras

    formPago.inputTelefono.value = valorInput
    .replace(/\s/g,'')
    .replace(/\D/g,'')
    .trim();

    if(valorInput == ''){
        Toastify ({
            text: 'Ingrese un numero de celular.',
            duration: 2000,
            gravity: 'bottom',
            position: 'center',
            style: {
                background: '#A10035'
            }
        }).showToast();
    }
})

//direccion
formPago.inputDireccion.addEventListener('keyup',(e)=>{
    
    let valorInput = e.target.value;

    if(valorInput == ''){
        Toastify ({
            text: 'Ingrese una direccion de envio.',
            duration: 2000,
            gravity: 'bottom',
            position: 'center',
            style: {
                background: '#A10035'
            }
        }).showToast();
    }
})

// boton pagar

botonPagar.addEventListener('click',()=>{
    enviarFormulario()
    setTimeout( function() {window.location.href = "http://127.0.0.1:5500/pages/catalogo.html"}, 5000 )
    carrito.length = 0
    //removiendo del local storage
    localStorage.removeItem('carrito');
})

