/* Evento formulario */
let form = document.getElementById('formulario')

form.addEventListener('submit',function(e){
    e.preventDefault();
 
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre =="" || apellido =="" || correo =="" || mensaje ==""){
        alert("Todos los cambos son obligatorios")
    } else if (nombre.length>30){
        alert("El nombre es demasiado largo")
    } else if (apellido.length>50) {
        alert("El/Los apellidos son demasiado largos")
    }else if (correo.length>50){
        alert("El correo es demasiado largo")
    } else if (mensaje.length<10){
        alert("Debe escribir algo con más de 10 caracteres")
    } else {
        console.log(`nombre: ${nombre}\napellido: ${apellido}\nmail: ${correo}\nmensaje: ${mensaje}`)
    }
    
    enviarFormulario();

    function enviarFormulario() {
    form.reset();
    form.lastElementChild.innerHTML = "Listo !!";
    }
})



