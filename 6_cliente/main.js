// Importar el módulo deseado en mi código...
// Constante se llama igual que el módulo
// usamso "require()" para pedir el nombre del módulo
const request = require('request');

//console.log(request);

// MÉTODO HTTP: GET()
/* request.get("http://www.google.com", function(error, response, body){
    console.log(body);
}); */

// Petición Get() a la SWAPI
const URL_SWAPI = "https://swapi.co/api/people/1/"; 

/* request.get(URL_SWAPI, (error, response, body)=>{
    console.log(response.statusCode);
    const respuesta = JSON.parse(body); 
    console.log(respuesta.name);
});
 */

// Ejercicio:
/*
    Mostrar en consola la primera abilidad de el pokemon #2
    EXTRA: muestren en consola todas las abilidades
        del pokemon #1
*/

const URL_PokeAPI = "https://pokeapi.co/api/v2/pokemon/150/";

/* request.get(URL_PokeAPI, (error, response, body)=>{
    const respuesta = JSON.parse(body);
    console.log(respuesta.abilities[0].ability.name);
}); */

// EXTRA:
/* request.get(URL_PokeAPI, (error, response, body) => {
    const arregloHabilidades = JSON.parse(body).abilities;
    
    arregloHabilidades.map( objetoHabilidad => {
        console.log(objetoHabilidad.ability.name);
    })
}); */

/*
    buscar un libro y traer el o los autores del primer libro
    peticionLibro(“i robot”);
    http://openlibrary.org/search.json?q=i+robot)
*/

let buscarAutoresPorLibro = (titulo) => {

    let URL = "http://openlibrary.org/search.json?q=";
    const URL_FINAL = URL + titulo;

    request.get(URL_FINAL, (error, res, body) => {
        const respuesta = JSON.parse(body);
        respuesta.docs[0].author_name.map( autor => {
            console.log(autor);
        })
    });
}

// buscarAutoresPorLibro('principito');


/*
    Hacer una petición por autor y devolver la lista de
    sus libros
    (http://openlibrary.org/search.json?author=asimov)
*/

let buscarLibrosPorAutor = (autor) => {
    let URL = "http://openlibrary.org/search.json?author=";
    const URL_FINAL = URL + autor;

    request.get(URL_FINAL, (error, res, body) => {
        const respuesta = JSON.parse(body);

        respuesta.docs.map(doc => {
            console.log(doc.title_suggest);
        })
    });
}

buscarLibrosPorAutor("marquez");
