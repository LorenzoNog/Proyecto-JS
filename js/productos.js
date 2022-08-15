let Pizzas = [
    {id:1, nombre: 'pepperoni', precio:400},
    {id:2, nombre: 'SoloQueso', precio:400},
    {id:3, nombre: 'carneDetroit', precio:1200},
    {id:4, nombre: 'hawaianaDetroit', precio:1000},
    {id:5, nombre: 'ExtraQueso', precio:600},
    {id:6, nombre: 'Carne', precio:600},
    {id:7, nombre: 'Carnex5', precio:800},
    {id:8, nombre: 'mixta', precio:500},
    {id:9, nombre: 'suprema', precio:500},
    {id:10, nombre: 'veggie', precio:500},
    {id:11, nombre: 'veggieDetroit', precio:1000}
]

let EntradasYPostres = [
    {id:12, nombre: 'Brownie1' , precio:400},
    {id:13, nombre: 'Brownie2', precio:400},
    {id:14, nombre: 'Combo', precio:500},
    {id:15, nombre: 'panesAjo', precio:300},
    {id:16, nombre: 'dedosQueso', precio:300},
    {id:17, nombre: 'panQueso', precio:400},
    {id:18, nombre: 'panQuesoPepperoni' , precio:500},
    {id:19, nombre: 'alitasAjo', precio:600},
    {id:20, nombre: 'alitasBBQ', precio:600}
]

const GuardarStorage = (clave,valor) => {localStorage.setItem(clave,valor)};

GuardarStorage( 'Pizzas', JSON.stringify(Pizzas));
GuardarStorage( 'Entradas', JSON.stringify(EntradasYPostres));

function TraerDatos(){
    let sabores = JSON.parse(localStorage.getItem("Pizzas"));
    let Entradas = JSON.parse(localStorage.getItem("Entradas"));

    console.log(sabores);
    console.log(Entradas);
}

TraerDatos();