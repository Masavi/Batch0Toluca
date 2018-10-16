const request = require('request')
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

function createAuthor(nombre, apellidos, nacionalidad, biografia, genero, edad) {
    const URI = 'authors/'
    var URL_FINAL = URL_BASE + URI

    var jsonSend = {
        "name": nombre,
        "last_name": apellidos,
        "nacionalidad": nacionalidad,
        "biography": biografia,
        "gender": genero,
        "age": edad
    }

    return new Promise((resolve, reject) => {
        request.post({ url: URL_FINAL, form: jsonSend }, (err, response, body) => {
            let json = JSON.parse(body)
            response.statusCode == 201
                ? resolve(json)
                : reject('Error al crear un nuevo autor')
        })
    })
}

/* createAuthor("prueba crear","last name primera","MX","bio primera","M",53)
     .then(nuevoAutor => console.log(nuevoAutor))
     .catch(error =>console.log(error)) */

function readAuthor(id) {
    const URI = `authors/${id}/`;
    var URL_FINAL = URL_BASE + URI;
    return new Promise((resolve, reject) => {
        request.get(URL_FINAL, (error, response, body) => {

            // If tradicional...
/*             if ( response.statusCode == 200){
                resolve(JSON.parse(body));
            } else {
                reject(`404: El autor con id ${id} no existe.\nCuerpo de la respuesta:\n${body}\nError:\n${error}`);
            } */

            // If ES6 (Operador Ternario)
            response.statusCode == 200
                ? resolve(JSON.parse(body))
                : reject(`404: El autor con id ${id} no existe.\nCuerpo de la respuesta:\n${body}\nError:\n${error}`)
        });
    });
}

/*  readAuthor(1007)
     .then(autor=>console.log(autor))
     .catch(error =>console.log(error)) */


function updateAuthor(id, name, last_name, nacionalidad, biography, gender, age) {
    const URI = `authors/${id}/`;
    var urlendpoint2 = URL_BASE + URI;
    var jsonUpdate = {
        "name": name,
        "last_name": last_name,
        "nacionalidad": nacionalidad,
        "biography": biography,
        "gender": gender,
        "age": age
    }
    return new Promise((resolve, reject) => {
        request.put({ url: urlendpoint2, form: jsonUpdate }, (error, response, body) => {
            response.statusCode == 200
                ? resolve(JSON.parse(body))
                : reject(`Error en Update: El autor con id ${id} no pudo ser actualizado.\nCuerpo de la respuesta:\n${body}\nError:\n${error}`)
        });
    });
}

// updateAuthor(1007,"Don Spamer 3","SpamSpamSpam","MX","Borrar por favor","M",56,true)
//     .then(autor=>console.log(autor))
//     .catch(error =>console.log(error))


function deleteAuthor(id) {
    const URI = `authors/${id}/`;
    var URL_FINAL = URL_BASE + URI;
    return new Promise((resolve, reject) => {
        request.delete(URL_FINAL, (error, response, body) => {
            response.statusCode == 204
                ? resolve("Autor eliminado exitosamente")
                : reject(`Error al eliminar: El autor con id ${id} no pudo ser eliminado.\nCuerpo de la respuesta:\n${body}\nError:\n${error}`)
        });
    });
}

//eliminarAuthor(1028)
//   .then(autor=>console.log(autor))
//   .catch(error =>console.log(error))

// Anidar Promesas...
createAuthor(...)
    .then(autorCreado => { 
        updateAuthor(autorCreado.id, ...)
            .then( autorActualizado => {
                deleteAuthor(autorEliminado)
                    .then( autorEliminado => console.log(autorEliminado));
            })
    })
    .catch( error => console.log(error));

// Encadenar Promesas...
createAuthor(...)
    .then( autorCreado => {
        return updateAuthor(autorCreado.id, ...)})
    .then( autorActualizado => {
        return deleteAuthor(autorActualizado.id)})
    .then( autorEliminado => {
        console.log(autorEliminado);})
    .catch( error => console.log(error));


/* updateAuthor(...)
    .then(autorActualizado => console.log(autorActualizado))
    .catch(error => console.log(error));

deleteAuthor(...)
    .then(autorEliminado => console.log(autorEliminado))
    .catch(error => console.log(error)); */












/* console.log(5+3);
console.log("Vamos a ejecutar código asíncrono con promesas...");

createAuthor("PRUEBA", "STACK_TRACE", "MX", "STACK", "F", 100)
    .then( autorNuevo => {
        console.log("Crear Autor:");
        console.log(autorNuevo);
        return updateAuthor(autorNuevo.id,"PRUEBA_ACTUALIZAR_STACK","STACK_TRACE","MX","STACK","F",100);
    })
    .then( autorModificado => {
        console.log("Modificar Autor:");
        console.log(autorModificado);
        return deleteAuthor(autorModificado.id);
    })
    .then( autorEliminado => {
        console.log(`Eliminar Autor:\n${autorEliminado}`);
    })
    .catch( error => console.log(error));

console.log(10+100+1000);
console.log("Aquí terminan todas mis líneas de código..."); */
























//console.log("Va a comenzar la primera promesa...");

// Genero un objeto promesa de la función createAuthor();
createAuthor("PRUEBA_STACK", "STACK_TRACE", "MX", "STACK", "F", 100)

    // A partir del objeto promesa que me devuelve createAuthor(), ejecutar then() cachando el autor creado del resolve en "autorCreado"
    .then(autorCreado => {
        console.log("\nAutor creado:\n", autorCreado);
        readAuthor(autorCreado.id)

            // A partir del objeto promesa que me devuelve readAuthor(), ejecutar then() cachando el autor leído del resolve en "autorLeido"
            .then(autorLeido => {
                console.log("\nAutor leído:\n", autorLeido);
                updateAuthor(
                    autorLeido.id,
                    "PRUEBA_ACTUALIZAR_STACK",
                    "STACK_TRACE",
                    "MX",
                    "STACK",
                    "F",
                    100
                )
                    // A partir del objeto promesa que me devuelve updateAuthor(), ejecutar then() cachando el autor actualizado del resolve en "autorModificado"
                    .then(autorModificado => {
                        console.log("\nAutor modificado:\n", autorModificado);
                        deleteAuthor(autorModificado.id)

                            // A partir del objeto promesa que me devuelve deleteAuthor(), ejecutar then() cachando el mensaje del resolve en "confirmacion"
                            .then(confirmacion => console.log("\nAutor eliminado:\n", confirmacion));
                    });
            });
    })

    // Cacho cualquier promesa rechazada con un solo catch();
    .catch(error => console.log(error));

console.log("Esto va después de la ejecución del catch final!!!")



















