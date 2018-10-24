import React, { Component } from 'react';
import Contador from './Contador';

class AdministrarContadores extends Component {
    state = {
        contadores: [
            {id: 1, titulo: 'Alpha'}, 
            {id: 2, titulo: 'Gamma'}, 
            {id: 3, titulo: 'Omega'},
            {id: 4, titulo: 'Epsilon'}
        ]
    }

    render() { 
        return (
            <div>
                {
                    this.state.contadores.map( contador => {
                        return <Contador id={contador.id} key={contador.id} titulo={contador.titulo}/>
                    })
                }
            </div>
        );
    }
}
 
export default AdministrarContadores;