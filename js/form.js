
/*form de contacto*/

let form = document.getElementById('formulario')

form.addEventListener('submit',function(e){
    e.preventDefault();

    formulario()
    
})


//redirigiendo al catalogo tras enviar el mensaje
const btnEnviar = document.getElementById('input5');
 btnEnviar.addEventListener('click',()=>{
        setTimeout( function() {window.location.href = "http://127.0.0.1:5500/pages/catalogo.html"}, 3000 )
    })

// funcion para enviar formulario
function enviarFormulario() {
    form.reset();
    form.lastElementChild.innerHTML = "Listo !!";
    Swal.fire ({
        icon: 'success',
        title: 'Tu mensaje ha sido enviado con éxito!',
        showConfirmButton: false,
        timer: 2000
    })
}

//funcion validacion de form
function formulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre =="" || apellido =="" || correo =="" || mensaje ==""){
        Toastify ({
            text: 'Todos los campos son obligatorios',
            duration: 2000,
            gravity: 'top',
            position: 'center',
            style: {
                background: '#A10035',
                width:100,
                height:100
            }
        }).showToast();
    }else if (nombre.length>30){
        Toastify ({
            text: 'Todos los campos son obligatorios',
            duration: 2000,
            gravity: 'top',
            position: 'center',
            style: {
                background: '#A10035',
                width:100,
                height:100
            }
        }).showToast();
    }else if(apellido.length>30){
        Toastify ({
            text: 'El/Los apellidos supera el límite de caracteres',
            duration: 2000,
            gravity: 'top',
            position: 'center',
            style: {
                background: '#A10035',
                width:100,
                height:100
            }
        }).showToast();
    }else if (correo.length>50){
        Toastify ({
            text: 'El correo es demasiado largo',
            duration: 2000,
            gravity: 'top',
            position: 'center',
            style: {
                background: '#A10035',
                width:100,
                height:100
            }
        }).showToast();
    }else if (mensaje.length>100){
        Toastify ({
            text: 'El mensaje es demasiado largo',
            duration: 2000,
            gravity: 'top',
            position: 'center',
            style: {
                background: '#A10035',
                width:100,
                height:100
            }
        }).showToast()
    }else {
        // si todo es correcto, enviar el formulario
        enviarFormulario();
        console.log(`nombre: ${nombre}\napellido: ${apellido}\nmail: ${correo}\nmensaje: ${mensaje}`)
    }

}


