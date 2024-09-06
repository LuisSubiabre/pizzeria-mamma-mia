import React, { useState, useContext } from 'react'
import { cartaPizza } from "../pizzas.js";
import { Button, Container, ListGroup, Badge, Image } from 'react-bootstrap'
import { formatNumber } from '../scripts.js';
import { CartContext } from '../context/CartContext.jsx';

const Cart = () => {
    const { cart, addToCart, removeFromCart, count } = useContext(CartContext);

    return (
        <>
            <h2>Carrito</h2>

            <Container>
                <h4>Total del carrito: </h4>
                <ListGroup>
                    {cart.map((element) => (
                        <ListGroup.Item key={element.id} className='p-2'>
                            <Image
                                src={element.image}
                                style={{ width: '10%' }}
                                rounded />

                            <strong> {element.name} : </strong>{formatNumber(element.price)}

                            <Button variant='outline-secondary' onClick={() => removeFromCart(element)}>-</Button>
                            {element.cantidad}
                            <Button variant='outline-secondary' onClick={() => addToCart(element)}>+</Button>


                        </ListGroup.Item>

                    ))}
                </ListGroup>
                {count === 0 ? <p>El carrito esta vacio</p> : <div><p>TOTAL: {formatNumber(count)}</p> <Button variant='success'>Ir a pagar</Button></div>}


            </Container>

        </>
    )
}

export default Cart