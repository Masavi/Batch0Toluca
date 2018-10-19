const express = require('express');
const bodyParser = require('body-parser');
const {Articulo, Ticket} = require('../database/mongooseClient.js');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.status(200).send("GET Exitoso!");
});

// ------------------- CRUD ARTICULOS --------------------

// POST ONE
app.post('/api/articulos/', (req, res) => {
    const jsonCliente = req.body;

    const nuevoArticulo = Articulo(jsonCliente);

    nuevoArticulo.save((error, articulo) => {
        res.status(201).send(articulo);
    });
});

// GET ALL 
app.get('/api/articulos/', (req, res)=>{
    Articulo
        .find()
        .exec()
        .then( listaArticulos => res.status(200).send(listaArticulos))
        .catch( error => res.status(400).send(error));
});

// GET ONE
app.get('/api/articulos/:id/', (req, res)=>{
    const articuloId = req.params.id;

    Articulo
        .findById(articuloId)
        .exec()
        .then( articulo => res.status(200).send(articulo))
        .catch( error => res.status(404).send(error));
});


// UPDATE ONE
app.put('/api/articulos/:id/', (req, res)=>{

    const articuloId = req.params.id;

    Articulo
        .findByIdAndUpdate(
        articuloId,
        { $set: req.body },
        { new: true })
        .exec()
        .then( articuloActualizado => res.status(200).send(articuloActualizado))
        .catch( error => res.status(400).send(error));
});

// DELETE ONE
app.delete('/api/articulos/:id/', (req, res) => {
    const articuloId = req.params.id;

    Articulo
        .findByIdAndDelete(articuloId)
        .exec()
        .then(articulo => res.status(204).send('Artículo eliminado exitosamente.'))
        .catch(error => res.status(404).send(error));
});


// -------------------- CRUD TICKETS ---------------------

// POST ONE
app.post('/api/tickets/', (req, res)=>{
    const jsonCliente = req.body

    const nuevoTicket = Ticket(jsonCliente);

    nuevoTicket.save( (error, ticket) => {
        res.status(201).send(ticket);
    });
});


// GET ALL
app.get('/api/tickets/', (req, res)=>{
    Ticket
        .find()
        .populate('articulos')
        .exec()
        .then( listaTickets => res.status(200).send(listaTickets))
        .catch( error => res.status(400).send(error));
});

// GET ONE
app.get('/api/tickets/:id/', (req, res)=>{
    const ticketId = req.params.id;

    Ticket
        .findById(ticketId)
        .populate('articulos')
        .exec()
        .then(ticket => res.status(200).send(ticket))
        .catch(error => res.status(404).send(error));
});

// UPDATE ONE
app.put('/api/tickets/:id/', (req, res) => {

    const ticketId = req.params.id;

    Ticket
        .findByIdAndUpdate(
            ticketId,
            { $set: req.body },
            { new: true })
        .exec()
        .then( ticketActualizado => res.status(200).send(ticketActualizado))
        .catch( error => res.status(400).send(error));
});

// DELETE ONE
app.delete('/api/tickets/:id/', (req, res) => {
    const ticketId = req.params.id;

    Ticket
        .findByIdAndDelete(ticketId)
        .exec()
        .then(ticket => res.status(204).send('Ticket eliminado exitosamente.'))
        .catch(error => res.status(404).send(error));
});

// ----- CALCULAR SUBTOTAL, IVA Y TOTAL DE TICKET ------
app.get('/api/tickets/factura/:id/', (req, res)=>{

    //console.log('Comienza el callback');

    const ticketId = req.params.id;
    let subtotal=0, iva=0, total=0;

    //console.log("Comienza la petición");

    Ticket
        .findById(ticketId)
        .populate('articulos')
        .exec()
        .then( ticket => {

            //console.log('se ejecuta el .then()');
/*          // Forma viejita...
            for(let i=0; i < ticket.articulos.length; i++){
                subtotal += ticket.articulos[i].precio;
            }
 */
            ticket.articulos.map( articulo => {
                subtotal += articulo.precio
            });


            //console.log(`subtotal: ${subtotal}, iva: ${iva}, total: ${total}`);

            iva = (subtotal * 0.16);
            total = subtotal + iva;

            //console.log(`subtotal: ${subtotal}, iva: ${iva}, total: ${total}`);

            //res.status(200).send(`subtotal: ${subtotal}, iva: ${iva}, total: ${total}`)
            
            Ticket 
                .findByIdAndUpdate(
                    ticket._id,
                    { 
                        subtotal: subtotal,
                        iva: iva,
                        total: total
                    },
                    { new: true })
                .populate('articulos')
                .exec()
                .then( ticketCalculado => res.status(200).send(ticketCalculado))
                .catch( error => res.status(404).send(error));
        })
        .catch( error => res.status(400).send(error));
});

// use port 3000 unless there exists a preconfigured port
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});