import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';

class CrearPelicula extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            fecha: Date.now(),
            genero: '',
            duracion: 0,
            imagen: ''
        } 
    }

    onInputChange = (event) => {
        //console.log(event.target);
        switch (event.target.id) {
            case 'input-nombre':
                this.setState({
                    nombre: event.target.value}
                    //, ()=>{console.log(this.state)}
                );
                break;
        
            case 'input-fecha':
                this.setState({
                    fecha: event.target.value
                });
                break;
                
            case 'input-genero':
                this.setState({
                    genero: event.target.value
                });
                break;

            case 'input-duracion':
                this.setState({
                    duracion: event.target.value
                });
                break;

            case 'input-imagen':
                this.setState({
                    imagen: event.target.value
                });
                break;

            default:
                console.log('soy el caso default');
                break;
        }
    }

    postPelicula = (e) => {
        e.preventDefault();

        axios
            .post('https://devf-cinema-api.herokuapp.com/api/v1/peliculas/', this.state)
            .then( response => alert(response.data))
            .catch( error => alert(error));
    }

    render() { 
        return ( 
            <Form onSubmit={this.postPelicula}>
                {/* Input Nombre */}
                <FormGroup>
                    <Label>Nombre</Label>
                    <Input onChange={this.onInputChange} type="text" id="input-nombre" placeholder="Introduce el nombre de la película" />
                </FormGroup>

                {/* Input Fecha */}
                <FormGroup>
                    <Label>Fecha de Estreno</Label>
                    <Input onChange={this.onInputChange} type="date" id="input-fecha" />
                </FormGroup>

                {/* Input Género */}
                <FormGroup>
                    <Label>Género</Label>
                    <Input onChange={this.onInputChange} type="text" id="input-genero" placeholder="Drama, Horror, Comedia..." />
                </FormGroup>

                {/* Input Duración */}
                <FormGroup>
                    <Label>Duración</Label>
                    <Input onChange={this.onInputChange} type="number" id="input-duracion" placeholder="Introduce la duración en minutos de la película" />
                </FormGroup>

                {/* Input Imagen */}
                <FormGroup>
                    <Label>Imagen</Label>
                    <Input onChange={this.onInputChange} type="text" id="input-imagen" placeholder="Introduce una url de una imagen de la película" />
                </FormGroup>
                <Button type='submit' color='primary'>Enviar</Button>
            </Form>
        );
    }
}
/*
{
	"nombre": "Pain and Gain",
	"fecha": "2013-02",
	"genero": "Comedia",
	"duracion": 187,
	"imagen": "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Pain_%26_Gain_film_poster.jpg/220px-Pain_%26_Gain_film_poster.jpg"
}
*/

 
export default CrearPelicula;