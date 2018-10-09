// Javascript Clásico
function suma(num1, num2){
    return num1 + num2;
}

// ES6
let resta = (num1, num2) => {
    return num1 - num2;
}

/*
    Función de Orden Superior (Higher Order Functions)

    Son funciones que reciben como alguno de sus
    parámetros otra función. Esto permite que la
    función de orden superior pueda ejecutar dentro 
    de su respectivo bloque otra función que no 
    le pertenezca. 
*/

function saludar(funcion){
    funcion();
}
// Callback 
// Son aquellas funciones que se pasan como parámetro
// a una función de orden superior
// saludar(function(){console.log("¡Hola!");});

// Ejemplo en Javascript Clásico...
function escribirConsola(mensaje){
    console.log(mensaje);
}

function escribirAlert(mensaje){
    alert(mensaje);
}

//escribirConsola("Hola en la consola jej");
//escribirAlert("Hola en alert jej");

// Ejemplo con callbacks!!!
function escribir(mensaje, formato){
    formato(mensaje);
}

//escribir("Hola a todos!!!", console.log);

/*
    EJEMPLO:

    Crear una función de orden superior que reciba como parámetros:
    1) Un número
    2) Otro número
    3) Una operación

    Al ejecutar esta función de orden superior, debe mostrarse en
    consola el resultado de la operación que se haya indicado.

    Por ejemplo, si ejecutamos la función así:

    ordenSuperior( 5, 3, sumar);
    -> 8
    
    ordenSuperior( 5, 3, restar);
    -> 2
*/

let ordenSuperior = (num1, num2, operacion) => {
    console.log("Estoy dentro de orden superior...");
    let resultado = operacion(num1, num2);
    console.log("Ha terminado la ejecución de orden superior!!!");
    return resultado;
}

let sumar = (num1, num2) => {
    console.log("Estoy dentro de la suma...")
    return num1 + num2;
}

let restar = (num1, num2) => {
    return num1 - num2;
}

//const resultado = ordenSuperior(7, 4, sumar);
//console.log(resultado);

const saludos = (saludo1, saludo2, saludo3) => {
    saludo1();
    saludo1();
    saludo1();
    saludo1();
    saludo1();
}

const holaAna = () => {
    console.log("Hola Ana!")
}

const holaDavid = () => {
    console.log("Hola David!")
}

const holaRene = () => {
    console.log("Hola Rene!")
}

const holaRigo = () => {
    console.log("Hola Rigo!")
}

const holaSergio = () => {
    console.log("Hola Sergio!")
}

const holaRich = () => {
    console.log("Hola Rich!")
}

//saludos(holaAna, holaRene, holaSergio);

/*
Escribe una funcion de orden superior que reciba una cadena de
caracteres y debe devolver, mediante un callback, la
cadena de caracteres en mayusculas o en minusculas.

		ordenSuperior("PejeLagarto", minus);
		-> pejelagarto

		ordenSuperior("PejeLagarto", mayus);
		-> PEJELAGARTO
*/

const cambiarFormato = (mensaje, formato) => {
    return formato(mensaje);
}

const mayus = (cadena) => {
    return cadena.toUpperCase();
}

const minus = (cadena) => {
    return cadena.toLowerCase();
}

// console.log(cambiarFormato("Pie Pequeño", minus));

/*
    Hacer un arreglo de 4 cantidades de tiempo en minutos 
    EJEMPLO [120, 80, 200, 100], y agarrar sólo las que son mayores 
    a dos horas (hacer la comparación en horas) mediante un callback.

		ordenSuperior([100, 50, 20, 200], callback);
*/

const mayorQueDosHoras = (arreglo, callback) => {
    return callback(arreglo);
}

function compararHoras(arreglo){

    let nuevoArreglo = [];

    for (let i=0; i < arreglo.length; i++){
        
        if (arreglo[i] >= 120){
            nuevoArreglo.push(arreglo[i]);
        }
    }

    return nuevoArreglo;
}

const arregloFinal = mayorQueDosHoras([300, 120, 100, 50, 10, 150], compararHoras);
// console.log(arregloFinal);

// FILTER

const animalitos = [
    { nombre: "carlitos",    especie: "conejo"},    // 0
    { nombre: "esteban",     especie: "perro"},     // 1
    { nombre: "fabiruchis",  especie: "tortuga"},   // 2
    { nombre: "anita",       especie: "gato"},      // 3
    { nombre: "miranda",     especie: "conejo" },   // 4
    { nombre: "lucas",       especie: "conejo" },   // 5
    { nombre: "Horacia",     especie: "tortuga"}    // 6
];

// SOLUCIÓN JS CLÁSICO
let conejos = [];
for (let i=0; i < animalitos.length; i++){
    if ( animalitos[i].especie == "conejo" ){
        conejos.push(animalitos[i]);
    } 
}

// SOLUCIÓN CON JS FUNCIONAL
/* let conejos = animalitos.filter( function(animal){
    return animal.especie == 'conejo';
}) */

// filter -> elemento por elemento se manda al callback...
/* let conejos = animalitos.filter( animalito => {
    return animal.especie == "conejo";
}); */

let filtrarPerros = (animal) => {
    return animal.especie == 'perro';
}

let filtrarGatos = animal => {
  return animal.especie == "gato";
};

let filtrarTortugas = (animal) => {
    return animal.especie == 'tortuga';
}

let filtrarConejos = (animal) => {
    return animal.especie == 'conejo';
}

//console.log( animalitos.filter(filtrarTortugas) );


// MAP JS
const animales = [
    { nombre: "marquito",   especie: "hamster", comidasFavoritas:["semillas", "jamon"] }
];

animales.map( animal => {
    animal.comidasFavoritas.map( comida => {
        console.log(`${animal.nombre} tiene ${comida} como comida favorita...`);
    })
});

