
/* Efecto hover boton index*/
let boton = document.getElementsByClassName('boton');

    for(let i = 0; i < boton.length; i++){
    boton[i].addEventListener('mouseover', () => {
        boton[i].style.transform = "scale(1.2)";
    })

    boton[i].addEventListener('mouseout', () => {
        boton[i].style.transform = "scale(1)";
    })
}

/* Efecto hover page1*/
let retiro = document.getElementsByClassName('seleccionar');

    for(let i = 0; i < retiro.length; i++){
    retiro[i].addEventListener('mouseover', () => {
        retiro[i].style.color = "#A20A0A";
    })

    retiro[i].addEventListener('mouseout', () => {
        retiro[i].style.color = "black";
    })
}

/* efecto hover tarjetas */
let card = document.getElementsByClassName('card');

    for(let i = 0; i < card.length; i++){
    card[i].addEventListener('mouseover', () => {
        card[i].style.transform = "scale(1.1)";
    })

    card[i].addEventListener('mouseout', () => {
        card[i].style.transform = "scale(1)";
    })
}

/* scroll */

btn = document.getElementById("botonScroll")
function scrollear(){
    document.documentElement.scrollTop = 800;

}


