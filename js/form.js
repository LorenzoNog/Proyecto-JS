/* Evento formulario */
let form = document.getElementById('formulario')

form.addEventListener('submit',function(e){
    e.preventDefault();
 
    validacion();
    enviarFormulario();
    
})


function enviarFormulario() {
    form.reset();
    form.lastElementChild.innerHTML = "Listo !!";
    Swal.fire ({
        icon: 'success',
        title: 'Tu mensaje ha sido enviado con éxito!',
        showConfirmButton: false,
        timer: 1500
    })
}

function validacion(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;
    if (nombre =="" || apellido =="" || correo =="" || mensaje ==""){
        Toastify ({
            text: 'Todos los campos son obligatorios',
            duration: 3000,
            gravity: 'top',
            position: 'center',
            style: {
                background: '#A10035',
                width:100,
                height:100
            }
        }).showToast();
        
    } 

    /* operador logico and */
    
    nombre.length>30 && Toastify ({
        text: 'Todos los campos son obligatorios',
        duration: 3000,
        gravity: 'top',
        position: 'center',
        style: {
            background: '#A10035',
            width:100,
            height:100
        }
    }).showToast();;
    apellido.length>30 && Toastify ({
        text: 'El/Los apellidos supera el límite de caracteres',
        duration: 3000,
        gravity: 'top',
        position: 'center',
        style: {
            background: '#A10035',
            width:100,
            height:100
        }
    }).showToast();;
    correo.length>50 && Toastify ({
        text: 'El correo es demasiado largo',
        duration: 3000,
        gravity: 'top',
        position: 'center',
        style: {
            background: '#A10035',
            width:100,
            height:100
        }
    }).showToast();

    /* operador ternario */
    mensaje.length>100 ? Toastify ({
        text: 'El mensaje es demasiado largo',
        duration: 3000,
        gravity: 'top',
        position: 'center',
        style: {
            background: '#A10035',
            width:100,
            height:100
        }
    }).showToast() : console.log(`nombre: ${nombre}\napellido: ${apellido}\nmail: ${correo}\nmensaje: ${mensaje}`)
}