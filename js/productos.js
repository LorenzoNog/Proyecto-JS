let Especiales = [
    {
        id:1,
        descripcion:'Pizza grande cubierta con más de 100 pepperonis y una corteza crujiente.',
        nombre: 'Pepperoni',
        precio:400, 
        cantidad:1,
        img:"../img/pepperoni.png"
    },
    {
        id:2,
        descripcion:'Pizza grande de masa delgada y cubierta con queso hasta el borde, imposible no tentarse.',
        nombre: 'Only cheese', 
        precio:400,
        cantidad:1,
        img:"../img/queso.png"
    },
    {
        id:3,
        descripcion:'Pizza grande estilo Detroit con pepperoni, salchicha italiana y tocineta', 
        nombre: 'Carne: Detroit style', 
        precio:1200, 
        cantidad:1,
        img:"../img/detroit-carne.png"
    },
    {
        id:4,
        descripcion:'Pizza grande estilo Detroit con jamón ahumado y piña', 
        nombre: 'Hawaiana: Detroit style', 
        precio:1000, 
        cantidad:1,
        img:"../img/detroit-hawaiana.png"
    },
    {
        id:5,
        descripcion:'Pizza redonda grande con más queso que cualquier otra pizza que hayas probado.', 
        nombre: 'Extra cheese', 
        precio:600,
        cantidad:1, 
        img:"../img/extraqueso.png"
    },
    {
        id:6,
        descripcion:'Pizza redonda grande con base de salsa y queso italiano, arriba salchicha ', 
        nombre: 'Italiana', 
        precio:600,
        cantidad:1, 
        img:"../img/carne.png"
    },
    {
        id:7,
        descripcion:'Pizza redonda grande con tocino, salchicha italiana, jamón ahumado, pepperoni y carne de res sazonada', 
        nombre: '5 carnes', 
        precio:800, 
        cantidad:1,
        img:"../img/carnex5.png"
    },
    {
        id:8,
        descripcion:'Cuatro rebanadas de pizza de pepperoni combinadas con 8 rectangulos de queso', 
        nombre: 'Mixta', 
        precio:500,
        cantidad:1, 
        img:"../img/mixta.png"
    },
    {
        id:9,
        descripcion:'Pizza redonda grande con pepperoni, salchicha italiana, champiñones, cebollas y pimientos verdes', 
        nombre: 'Supreme', 
        precio:500, 
        cantidad:1,
        img:"../img/supreme.png"
    }
]

let Veganas = [
    {
        id:10,
        descripcion:'Pizza redonda grande con pimientos verdes, cebollas, champiñones, aceitunas negras y condimento italiano', 
        nombre: 'Veggie', 
        precio:500, 
        cantidad:1,
        img:"../img/veggie.png"
    },
    {
        id:11,
        descripcion:'Pizza grande estilo Detroit con pimientos verdes, cebollas, champiñones y aceitunas negras',
        nombre: 'Veggie: Detroit style', 
        precio:1000,
        cantidad:1, 
        img:"../img/detroitveggie.png"
    }
]

let Entradas = [
    {
        id:14,
        descripcion:'Ocho palitos de pan con sabor a mantequilla y ajo, luego espolvoreados con queso parmesano y servidos con Crazy Sauce®', 
        nombre: 'Combo', 
        precio:500, 
        cantidad:1,
        img:"../img/entrada1.png"
    },
    {
        id:15,
        descripcion:'Ocho palitos de pan con sabor a mantequilla y ajo, luego espolvoreados con queso parmesano', 
        nombre: 'Panes de ajo', 
        precio:300, 
        cantidad:1,
        img:"../img/entrada2.png"
    },
    {
        id:16,
        descripcion:'Tres piezas de unos dedos de queso irresistibles más Crazy Sauce®', 
        nombre: 'Dedos de queso', 
        precio:300, 
        cantidad:1,
        img:"../img/dedosdequeso.png"
    },
    {
        id:17,
        descripcion:'Diez piezas de pan recién horneado con un borde crujiente, cubierto con queso y cubierto con especias italianas', 
        nombre: 'Pan de queso', 
        precio:400,
        cantidad:1, 
        img:"../img/pandequeso.png"
    },
    {
        id:18,
        descripcion:'Diez piezas de pan recién horneado con borde crocante, cubiertas con queso, pepperoni y espolvoreadas con queso parmesano', 
        nombre: 'Pan de queso y pepperoni' , 
        precio:500, 
        cantidad:1,
        img:"../img/pandequeso2.png"
    },
    {
        id:19,
        descripcion:'Alitas asadas al horno con salsa cremosa de parmesano y ajo', 
        nombre: 'Alitas de ajo', 
        precio:600, 
        cantidad:1,
        img:"../img/alitas4.png"
    },
    {
        id:20,
        descripcion:'Alitas asadas al horno con una dulce salsa BBQ tradicional', 
        nombre: 'Alitas BBQ', 
        precio:600, 
        cantidad:1,
        img:"../img/alitas2.png"
    }
]
const menu = [...Especiales,...Veganas,...Entradas];

const Stock = [...menu];

/* const GuardarStorage = (clave,valor) => {localStorage.setItem(clave,valor)};

GuardarStorage( 'menu', JSON.stringify(Stock)); */

localStorage.removeItem('Pizzas');
localStorage.removeItem('carrito');
localStorage.removeItem('Entradas');