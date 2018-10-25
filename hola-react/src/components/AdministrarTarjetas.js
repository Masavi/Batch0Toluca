import React, { Component } from 'react';
import Tarjeta from './Tarjeta.jsx';
import axios from 'axios';

class AdministrarTarjetas extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemones: []
        }
    }

    /*
    this.state.arreglo.filter()
    */

    peticionPokemon(url){
        return axios.get(url);
    }

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then( response => {
                for (let i=0; i < 150; i++){
                    
                    this.peticionPokemon(response.data.results[i].url)
                        .then( response => {
                            this.setState({
                                pokemones: [...this.state.pokemones, response.data]
                            })
                        })
                        .catch( error => console.log(error))
                }
            })
            .catch( error => {
                console.log(error);
            })
    }

    eliminarHijo = (id) => {
        console.log("Eliminando hijo...");
        console.log(id);
        const pokemones = this.state.pokemones.filter( pokemon =>
            pokemon.id !== id
        );
        this.setState({
            pokemones: pokemones
        });
    }
    
    render() { 
        return ( 
            <div>
                {
                    this.state.pokemones.map( pokemon => {
                        return <Tarjeta 
                            key       = {pokemon.id}
                            id        = {pokemon.id}
                            name      = {pokemon.name}
                            weight    = {pokemon.weight}
                            height    = {pokemon.height}
                            abilities = {pokemon.abilities}
                            img       = {pokemon.sprites.front_default} 
                            eliminarTarjeta  = {this.eliminarHijo}    
                            />
                    })
                }
            </div>
        );
    }
}
 
export default AdministrarTarjetas;