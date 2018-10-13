const request = require('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com';


// CREATE
const ENDPOINT_POST = '/api/v1/authors/';

/* const jsonSend = {
  gender: "M",
  age: 41,
  name: "Antonio",
  last_name: "Leguminosa",
  nacionalidad: "MX",
  biography: "Nací con la forma de un frijol"
}; */

const URL_POST = URL_BASE + ENDPOINT_POST;

// Solución con solo Promesa...
/* const promesaPost = new Promise( (resolve, reject)=>{
    request.post({url: URL_POST, formData: jsonSend}, (error, response, body) => {
        if(response.statusCode === 201){
            const json = JSON.parse(body);
            resolve(json);
        } else {
            reject('Error en get');
        }
    });
});

promesaPost
    .then( (mensaje)=>{console.log(mensaje)})
    .catch( (mensaje)=>{console.log(mensaje)} ); */

// Solución con Promesa y Función!

let peticionPost =  (name, last_name, nacionalidad, biography, gender, age) => {

    const jsonSend = {
        gender: gender,
        age: age,
        name: name,
        last_name: last_name,
        nacionalidad: nacionalidad,
        biography: biography
    };    

    return new Promise( (resolve, reject)=>{
        request.post({url: URL_POST, formData: jsonSend}, (error, response, body) => {
            if(response.statusCode === 201){
                const json = JSON.parse(body);
                resolve(json);
            } else {
                reject('Error en get');
            }
        });
    });
}

peticionPost('nombre', 'apellido', 'MX', 'Bio', 'M', 30)
    .then( mensaje => console.log(mensaje))
    .catch( mensaje => console.log(mensaje));










/* let suma = (n1, n2) => {
    return n1+n2;
}

-> suma(5,3);
-> 8 */