// Variables
var perrito;

// ECMAScript 6
let perrito2;
const numero = 10;

// Tipos de Datos
let numeros = 10
let cadena = "10x"
let booleano = false;

let arreglo = [];
let objeto = {};

// Estructuras de Control
// Sentencia if-else

let edad = "perro salchicha";
/*
    if (edad > 17)
    {
        console.log("Eres mayor de edad!");
    }
    else console.log("No eres mayor de edad");
*/

// Ciclos For (For Loop)
/* for (let i=1; i<101; i++){
    console.log(i);
} */


// Funciones
function contador(){
    return "Soy el contador, me llamo Luis";
}

function suma(num1, num2) {
    return num1 + num2;
}

/* let resultado = suma(3, 8);
console.log(resultado); */
//console.log(suma(3,8));
//console.log(suma(5,2));

// Arreglos
let miArreglo = [];
//console.log( typeof miArreglo );

miArreglo = [
    "Hola",
    true,
    100,
    function miFuncion(){
        console.log("soy una funcion");
    }
];

let numerosPares = [];

// i = i + 2
// i += 2

/*
for(let i=0; i<=50; i+=2){
    numerosPares.push(i);
}
*/

/*
for(let i=0; i<=50; i++){
    if (i%2 == 0){
        numerosPares.push(i);
    }
}
*/


let animales = [
    "Perro",
    "Gato",
    "Perico",
    "Tucan",
    "Elefante",
    "Tlacuachote",
    "Tlacuachito",
    "Mapache"
]

//console.log(animales.length);

/* for(let i=0; i<animales.length; i++){
    console.log(animales[i]);   
} */



// Javascript vanilla
function resta (num1, num2) {
    return num1 - num2;
}

// ECMAScript 6
let miFuncionFlecha = (num1, num2) => {
    return num1 - num2;
}

/* 

    "perritosalchicha" -> "pErRiToSaLcHiChA"

-> devuelve un camelcame
-> convertir letra por letra en minusculas y mayusculas sucesivamente

palabra -> pAlAbRa

1) ¿Como recorro una palabra? ¿Cómo accedo a una posición de la palabra?
palabra.length -> tamaño de la palabra
palabra.charAt(3) -> a

2) Las letras en posiciones pares deben ser minusculas,
   Las letras en posiciones nones deben ser mayusculas

palabra.charAt(0) -> convertirlo en minusucula
palabra.charAt(1) -> convertir a mayuscula

3) ¿Cómo puedo mostrar juntas estas letras convertidas?

let mensajeFinal;

palabra.charAt(0) -> + mensajeFinal
palabra.charAt(1) -> + mensajeFinal

*/


function toCamelCase(palabra)
{
    let cadenaFinal = "";

    for(let i=0; i < palabra.length; i++)
    {
        //console.log(palabra.charAt(i))
        if (i%2 == 0)
        {
            //cadenaFinal = cadenaFinal + palabra.charAt(i).toLowerCase();
            cadenaFinal += palabra.charAt(i).toLowerCase();
        } else {
            cadenaFinal += palabra.charAt(i).toUpperCase();
        }
    }

    return cadenaFinal;
}

let resultado = toCamelCase("perritoSALCHICHAkajsdhkajshdkajshdkajsd");

console.log(resultado);
