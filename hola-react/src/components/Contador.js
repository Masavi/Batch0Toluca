import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';

class Contador extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: props.titulo,
            contador: 0
        }
    }

    incrementar = () => {
        this.setState({
            contador: this.state.contador + 1
        })
    }
    
    decrementar = () => {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    formatearContador = () => {
        if (this.state.contador === 0){
            return 'secondary'
        } else if (this.state.contador > 0){
            return 'primary'
        } else if (this.state.contador < 0){
            return 'warning'
        }
    }

    formatearNumero = () => {
        return this.state.contador === 0
        ? 'cero'
        : this.state.contador
    }

    render() { 
        return ( 
            <div className='container'>
                <h1 style={{ fontSize: '1.5em' }}>{this.state.titulo}</h1>
                <span> 
                    {/* <Button onClick={console.log('Click!')} color='success' style={{ fontSize: '0.75em' }}> + </Button>*/}
                    <Button onClick={this.incrementar}  color='success' style={{ fontSize: '0.75em' }}> + </Button>
                    <Badge color={this.formatearContador()} style={{ margin: '0em 2.25em' }}> {this.formatearNumero()} </Badge>
                    <Button onClick={this.decrementar} color='danger' style={{ fontSize: '0.75em' }}> - </Button>
                </span>
            </div>
        );
    }
}
 
export default Contador;