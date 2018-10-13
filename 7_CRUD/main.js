const request = require('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com';

// CRUD (Create Read Update Delete)
// Create
const URL_POST = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

// El servidor me pide que le mande algo así...
/* {
    "name": [
        "This field is required."
    ],
    "last_name": [
        "This field is required."
    ],
    "nacionalidad": [
        "This field is required."
    ],
    "biography": [
        "This field is required."
    ],
    "gender": [
        "This field is required."
    ],
    "age": [
        "This field is required."
    ]
} */

const jsonSend = {
    'gender': 'M',
    'age': 41,
    'name': 'Antonio',
    'last_name': 'Leguminosa',
    'nacionalidad': 'MX',
    'biography': 'Nací con la forma de un frijol'
}

/* request.post({url: URL_POST, formData: jsonSend}, (error, response, body)=>{
    const json = JSON.parse(body);
    console.log(json);
}); */

// Read ONE
const ENDPOINT_GETONE = '/api/v1/authors/1500/';
const URL_READONE = URL_BASE + ENDPOINT_GETONE;
/* request.get( URL_READONE, (error, response, body)=>{
    const json = JSON.parse(body);
    console.log(json);
}); */

// Read ALL
const URL_AUTHORS = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';
/* request.get( {url: URL_AUTHORS}, (error, response, body)=>{
    const arregloAutores = JSON.parse(body);

    // El map siempre va plural -> singular
    arregloAutores.map( autor => {
        console.log(autor);
    });
}); */

// Patch
const ENDPOINT_GETONE = "/api/v1/authors/1500/";

const jsonSend = {
    'gender': 'M',
    'age': 41,
    'name': 'AntonioModiificado',
    'last_name': 'LeguminosaMejorada',
    'nacionalidad': 'MX',
    'biography': 'Nací con la forma de un frijol, y de una berenjena'
}

/* request.patch({url: URL_POST, formData: jsonSend}, (error, response, body)=>{
    const json = JSON.parse(body);
    console.log(json);
}); */


// Delete
const ENDPOINT_DELETE = '/api/v1/authors/1500/';
/* const URL_DELETE = URL_BASE + ENDPOINT_DELETE;
request.delete( URL_DELETE, (error, response, body)=>{
    const json = JSON.parse(body);
    console.log(json);
}); */