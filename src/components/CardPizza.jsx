import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { formatNumber } from '../scripts.js';

const CardPizza = ({ name, price, image, ingredients }) => {
    const HorizontalLine = ({ color }) => (
        <div
            style={{
                borderBottom: `1px solid ${color}`,
                margin: '10px 0',
                padding: 2,
            }}
        />
    );

    return (

        <Card className="card-pizza mt-4">
            <Card.Img variant="top" src={image} alt={name} />

            <Card.Body>
                <ListGroup className="list-group-flush">
                    <Card.Title>{name}</Card.Title>
                    <HorizontalLine color="gray" />
                    <Card.Text>
                        🍽️<strong>Ingredientes: </strong>{ingredients.join(", ")}
                    </Card.Text>
                    <HorizontalLine color="gray" />
                    <h4 className='text-center'>Precio: {formatNumber(price)}</h4>

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
