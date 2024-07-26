import React from 'react';

const CardPizza = ({ name, price, image, ingredients }) => {
    console.log(name, price, image, ingredients);
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price: ${price}</p>
                <p className="card-text">Ingredients: {ingredients.join(", ")}</p>
                <div className="d-flex justify-content-around">
                    <a href="#" className="btn btn-primary">Ver más</a>
                    <a href="#" className="btn btn-primary">Añadir</a>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;