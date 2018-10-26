import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import CrearPelicula from './components/cinema/CrearPelicula';
import AdministrarTarjetas from './components/AdministrarTarjetas';
import HolaMundo from './components/HolaMundo.jsx';
import Navbar from './components/NavbarComponent';

class App extends Component {
    render() { 
        return (
            <BrowserRouter>
                <div>
                    <header>
                        <Navbar />
                    </header>
                    <main>
                        <Route exact path='/' component={CrearPelicula} />
                        <Route exact path='/tarjeta' component={AdministrarTarjetas} />
                        <Route exact path='/holamundo' component={HolaMundo} />
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}
 
export default App;
// module.exports = App;