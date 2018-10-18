const express = require('express');
const bodyParser = require('body-parser');

const {Director, Pelicula} = require('../database/mongoController');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Get a Raíz (Hola Mundo)
app.get('/', (request, response) => {
    response.status(200).send('¡Bienvenido a Cinema Dev.f!');
});

// ---------- CRUD Directores ---------- //

// CREATE ONE
app.post('/api/v1/directores/', (req, res)=>{
    // Cachamos los atributos que necesitamos para crear el nuevo objeto
    const {nombre, edad, peliculas, imagen} = req.body;

    // Creamos un objeto nuevo de la colección, que será guardado en la BD
    const directorNuevo = Director({
        nombre: nombre,
        edad: edad,
        peliculas: peliculas,
        imagen: imagen
    });

    // Pedir a la base de datos que guarde el nuevo objeto en su respectiva colección
    directorNuevo.save( (error, nuevoDirector)=>{
        if (error) {
            res.status(400).send(error.message);
        } else {
            res.status(201).send(nuevoDirector);
        }
    })
});

// GET ALL
app.get('/api/v1/directores/', (req, res)=>{
    Director
        .find()
        .populate('peliculas')
        .exec()
        .then( listaDirectores => {
            res.status(200).send(listaDirectores);
        })
        .catch( error => res.status(400).send(error));
});

// GET ONE
app.get('/api/v1/directores/:id/', (req, res)=>{
    const {id} = req.params;
    Director
        //.find({_id: id})
        .findById(id)
        .populate('peliculas')
        .exec()
        .then(director => res.status(200).send(director))
        .catch(error => {
            error.name === 'CastError'
            ? res.status(404).send({
                "mensaje_servidor": "no fue posible hallar el director con el id especificado",
                "mensaje_mongodb":error
            })
            : res.status(404).send(error)
        });
});

// UPDATE ONE
app.put('/api/v1/directores/:id/', (req, res)=>{
    const {id} = req.params;

    Director
        .findByIdAndUpdate( id, { $set: req.body }, {new: true})
        .populate('peliculas')
        .exec()
        .then( directorActualizado => res.status(200).send(directorActualizado))
        .catch( error => res.status(400).send(error));
});

// DELETE ONE
app.delete('/api/v1/directores/:id/', (req, res)=>{
    Director
        .findByIdAndDelete(req.params.id)
        .exec()
        .then( () => res.status(204).send({"mensaje": "director eliminado exitosamente"}))
        .catch( error => res.status(404).send(error));
}); 

// ---------- CRUD Películas ---------- //

// CREATE ONE
app.post('/api/v1/peliculas/', (req, res) => {
    // Cachamos los atributos que necesitamos para crear el nuevo objeto
    //const { nombre, fecha, director, genero, duracion, imagen} = req.body;

    // Creamos un objeto nuevo de la colección, que será guardado en la BD
/*     const directorNuevo = Director({
        nombre: nombre,
        edad: edad,
        peliculas: peliculas,
        imagen: imagen
    }); */

    const peliculaNueva = Pelicula(req.body);

    // Pedir a la base de datos que guarde el nuevo objeto en su respectiva colección
    peliculaNueva.save((error, nuevaPelicula) => {
        if (error) {
            res.status(400).send(error.message);
        } else {
            res.status(201).send(nuevaPelicula);
        }
    })
});

// GET ALL
app.get('/api/v1/peliculas/', (req, res) => {
    Pelicula
        .find()
        .exec()
        .populate('peliculas')
        .then(listaPeliculas => {
            res.status(200).send(listaPeliculas);
        })
        .catch(error => res.status(400).send(error));
});

// GET ONE
app.get('/api/v1/peliculas/:id/', (req, res) => {
    const { id } = req.params;
    Pelicula
        //.find({_id: id})
        .findById(id)
        .populate('peliculas')
        .exec()
        .then(pelicula => res.status(200).send(pelicula))
        .catch(error => {
            error.name === 'CastError'
                ? res.status(404).send({
                    "mensaje_servidor": "no fue posible hallar la película con el id especificado",
                    "mensaje_mongodb": error
                })
                : res.status(404).send(error)
        });
});

// UPDATE ONE
app.put('/api/v1/peliculas/:id/', (req, res) => {
    const { id } = req.params;

    Pelicula
        .findByIdAndUpdate(id, { $set: req.body }, { new: true })
        .populate('peliculas')
        .exec()
        .then(peliculaActualizada => res.status(200).send(peliculaActualizada))
        .catch(error => res.status(400).send(error));
});

// DELETE ONE
app.delete('/api/v1/peliculas/:id/', (req, res) => {
    Pelicula
        .findByIdAndDelete(req.params.id)
        .exec()
        .then(() => res.status(204).send({ "mensaje": "pelicula eliminada exitosamente" }))
        .catch(error => res.status(404).send(error));
}); 

app.listen(port, function () {
    console.log('Cinema Dev.f API está corriendo en el puerto' + port + '!');
});