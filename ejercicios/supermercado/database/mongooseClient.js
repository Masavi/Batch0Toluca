const mongoose = require('mongoose');

const URL = 'mongodb://mauricio:abc123@ds027748.mlab.com:27748/tiendita';
mongoose.connect(URL, ()=>{console.log("----- Base de Datos Conectada -----")});

const articuloSchema = mongoose.Schema({
    articulo: mongoose.Schema.ObjectId,
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    existencias: {type: Number, default: 10}
});

const ticketSchema = mongoose.Schema({
    ticket: mongoose.Schema.ObjectId,
    subtotal: { type: Number, default: 0},
    iva: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    articulos: [{ type: mongoose.Schema.ObjectId, ref: 'Articulo', required: true}]
});

const Articulo = mongoose.model('Articulo', articuloSchema);
const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = {Articulo, Ticket};
