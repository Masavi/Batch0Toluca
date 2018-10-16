const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Get a Raíz (Hola Mundo)
app.get('/', (request, response)=>{
    response.status(200).send('¡Hola Mundo!');
});

// CRUD

// Create
app.post('/api/v2/autores/', (req, res)=>{
    // cachar lo que nos manda el cliente...
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;

    // guardar lo que nos manda el cliente en la base de datos
    // responder al cliente que se creo el objeto exitosamente...
    const jsonRespuesta = {
        "id": 1,
        "nombre": nombre,
        "apellido": apellido
    }

    res.status(201).send(jsonRespuesta);
});

// Read ALL
app.get('/api/v2/autores/', (request, response) => {


    // Aquí ocurrirían cosas mágicas con la base de datos...
    const json = {
        nombre: "Mauricio",
        apellidoPaterno: "Saavedra",
        apellidoMaterno: "Villarreal"
    }
    response.status(200).send(json);
});

// Read ONE
app.get('/api/v2/autores/:idAutor/', (req, res)=>{
    const { idAutor } = req.params;
    console.log(req.query);
    // Pedir a la base de datos que busque el autor con id = idAutor...
    // Mandar el autor que me devuelve a la base al cliente
    res.status(200).send(`El id es: ${idAutor}`);
});

// Encender el servidor ( pusharle on )
app.listen(3000, ()=>{
    console.log("El servidor esta escuchando en el puerto 3000");
});
