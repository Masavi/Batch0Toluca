import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Tarjeta extends Component {
    constructor(props){
        super(props);

        //this.state = props;
        this.state = {
            id: props.id,
            img: props.img,
            name: props.name,
            height: props.height,
            weight: props.weight,
            abilities: props.abilities
        }
    }

    eliminarTarjeta(){
        console.log("Click!!!");
    }

    render() { 
        return ( 
            <div>
                <Card style={{ width: '100%' }}>
                    <CardImg src={this.state.img} alt={`Imagen del pokemon ${this.state.name}`} />
                    <CardBody>
                        <CardTitle>{this.state.name}</CardTitle>
                        <CardSubtitle>{`weight: ${this.state.weight}in height: ${this.state.height}in`}</CardSubtitle>
                        <CardText>{
                            this.state.abilities.map( ability => {
                                return ability.ability.name; 
                            })
                        }</CardText>
                        <Button onClick={ ()=>{this.props.eliminarTarjeta(this.state.id)} } color='danger'>Delete</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Tarjeta;