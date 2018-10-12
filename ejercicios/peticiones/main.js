const request = require('request');

/*
Ejercicio 1)

Hacer una petición a la swapi de un personaje y obtener
sus películas.
*/

/* const URL_SWAPI = "https://swapi.co/api/people/20/";
request.get( URL_SWAPI, (error, response, body)=>{
    const cuerpo = JSON.parse(body); */
    // console.log(cuerpo.films); -> Me devuelve un arreglo de ENDPOINTS :(
    // Debemos hacer una nueva petición por cada endpoint del arreglo.

    // Solución para una sola posición del arreglo... (solución estática)
/*     request.get( cuerpo.films[0], (error, response, body)=>{
        const cuerpo = JSON.parse(body);
        console.log(cuerpo.title);

        // Probando código de Stackoverflow...
        // https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
        const myPrettyBody = JSON.stringify(cuerpo, null, 5); // spacing level = 2
        // console.log(myPrettyBody); 
    }); */

    // Solución para cualquier cantidad de posiciones del arreglo... (solución dinámica :D)
/*     console.log(`El personaje ${cuerpo.name} ha aparecido en:`);

    cuerpo.films.map( film =>{
        // console.log(film);
        request.get( film, (error, response, body)=>{
            console.log( JSON.parse(body).title );
        });
    }); */
//});
 



/*
Ejercicio 2)

Traer los primeros 151 pokemones de la primera generacion
y devolver un objeto con el nombre, sus moves, tipos, tamaño y peso.
*/

/*
Ejercicio 3)

https://coinmarketcap.com/api/
devolver el nombre de las 10 criptomonedas
mas caras en pesos mexicanos.
*/

/*
Ejercicio 4)

Devolver los asteroides que sean potencialmente peligrosos para la
tierra de la semana pasada hasta hoy.
(Buscar y utilizar la API de la NASA)
*/
/* const URL_NASA = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-10-04&end_date=2018-10-11&api_key=tFnw17zqvLUnJDDS5YlQs2jpU6BIye5G5hioj5so' 
request.get( URL_NASA, (error, response, body)=>{
    const objetoDeMeteoritos = JSON.parse(body).near_earth_objects; */

    // ¿Cómo iterar sobre un objeto en Javascript?
    // https://zellwk.com/blog/looping-through-js-objects/
    /*
    const fruits = {
        apple: 28,
        orange: 17,
        pear: 54,
    }

    const keys = Object.keys(fruits)
    console.log(keys) // [apple, orange, pear]
    */

    //const keys = Object.keys(objetoDeMeteoritos)
    //console.log(keys);

    /* keys.map( key => {
        objetoDeMeteoritos[key].map( asteroid => {

            if (asteroid.is_potentially_hazardous_asteroid === true){
                console.log(`El asteroide ${asteroid.name} representa peligro para la tierra!!!!`);
            }
        });
    }); */
//});

// Callback Hell!
/* function saludar( saludarAmigo){
    saludarAmigo();
}

saludarAmigo( cambiarSaludo){
    cambiarSaludo();
}

cambiarSaludo( finalizarSaludo){
    finalizarSaludo();
}

finalizarSaludo( mensaje){
    console.log(mensaje);
} */

// SetTimeout()
/* const callback = () => { console.log("Hola, me ejecuta timeout") }
setTimeout( callback, 3000); */

console.log("La promesa va a iniciar...");

let promesa = new Promise( (resolve, reject)=>{
    console.log("soy la promesa!");
    setTimeout( ()=>{
        resolve("La promesa se resolvió!");
    }, 3000);
});

// console.log(promesa);
promesa.then( (mensaje) => {console.log(mensaje)} );

console.log("La promesa terminó! Codigo finalizado...");