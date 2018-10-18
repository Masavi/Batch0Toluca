const mongoose = require('mongoose');
const URI_DB = 'mongodb://masavi:abc123@ds027748.mlab.com:27748/devf-cinema';

// Conexión con la base de datos
mongoose.connect(
    URI_DB,
    { useNewUrlParser: true }, // Objeto "options"
    ()=>{console.log("¡Conexión exitosa con la Base de Datos!")} // Csallback opcional
);

// Shortcuts por comodidad
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

// Esquemas (moldes) para crear colecciones en la base de datos
const directorSchema = Schema({
  director: ObjectId,
  nombre: { type: String, required: [true, "El campo de nombre es obligatorio"] },
  edad: Number,
  peliculas: [{ 
      type: ObjectId, 
      ref: 'Pelicula', 
      required: true
  }],
  imagen: { type: String, required: [true, "Debes insertar la url de una imagen del director"] },
  versionKey: false
});

const peliculaSchema = Schema({
    pelicula: {type: ObjectId},
    nombre: { type: String, required: [true, "El campo de nombre es obligatorio"] },
    fecha: {type: Date},
    director: { 
        type: ObjectId,
        ref: 'Director' 
    },
    genero: String,
    duracion: Number,
    imagen: { type: String, required: [true, "Debes insertar la url de alguna imagen de la pelicula"] },
    versionKey: false
});

// Creamos los modelos, que son el vínculo que nos permite acceder y modificar
// cada una de nuestras colecciones de nuestra base de datos. Las colecciones,
// a su vez, están enlazadas con los esquemas.
const Director = mongoose.model('Director', directorSchema);
const Pelicula = mongoose.model('Pelicula', peliculaSchema);

// Exportar mediante npm los modelos para poder utilizarlos en otro archivo.
/* const mongoExport = {
  Director: Director,
  Pelicula: Pelicula
};
module.exports = mongoExport; */
module.exports = {Director, Pelicula};