import React from 'react';
import { Button } from 'react-bootstrap';
const CardPizza = ({ name, price, image, ingredients }) => {
    console.log(name, price, image, ingredients);
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <hr />
                <p className="card-text">🍕<strong>Ingredientes: </strong>{ingredients.join(", ")}</p>
                <hr />
                <h4 className='text-center'>Precio: ${price}</h4>


                <div className="d-flex justify-content-around py-2">
                    <Button variant="outline-dark">Ver más</Button>
                    <Button variant="warning">Añadir 🛒</Button>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;