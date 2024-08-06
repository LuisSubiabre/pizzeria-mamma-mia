import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { formatNumber } from '../scripts.js';

const CardPizza = ({ name, price, image, ingredients }) => {
    //console.log(name, price, image, ingredients);

    return (
        <Card className="card-pizza">
            <Card.Img variant="top" src={image} alt={name} />

            <Card.Body>
                <ListGroup className="list-group-flush">
                    <Card.Title>{name}</Card.Title>
                    <hr />
                    <Card.Text>🍽️<strong>Ingredientes: </strong>{ingredients.join(", ")}
                        <hr />
                        <h4 className='text-center'> Precio: {formatNumber(price)}</h4>
                    </Card.Text>

                    <div className="d-flex justify-content-around py-2">
                        <Button variant="outline-success">Ver más</Button>
                        <Button variant="success">Añadir 🛒</Button>
                    </div>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default CardPizza;