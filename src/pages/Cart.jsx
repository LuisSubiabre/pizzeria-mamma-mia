import React, { useState, useContext } from 'react'
import { cartaPizza } from "../pizzas.js";
import { Button, Container, ListGroup, Badge, Image } from 'react-bootstrap'
import { formatNumber } from '../scripts.js';
import { CartContext } from '../context/CartContext.jsx';
const Cart = () => {
    const { carrito } = useContext(CartContext);


    /* funcion para disminuir carrito  */
    const removeFromCart = (element) => {
        setCarrito((prevState) => {
            const exist = carrito.find((x) => x.id === element.id)

            if (exist) {
                //si el producto es 1 y el usuario da click se quita del carrito, ya que de 1 pasara a 0.
                if (exist.cantidad <= 1) {
                    return prevState.filter((x) => x.id !== element.id)

                }
                //si el producto es mayor a 1 se disminuye en 1
                else {
                    return prevState.map((x) => x.id === element.id ? { ...exist, cantidad: exist.cantidad - 1 } : x)
                }

            }
            return prevState
        })
    }

    const total = carrito.reduce((a, c) => a + c.price * c.cantidad, 0)
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
        <>
            <h2>Carrito</h2>

            <Container>
                <h4>Total del carrito: </h4>
                {carrito.map((element) => (
                    <li key={element.id}>
                        {element.name} {formatNumber(element.price)} x {element.cantidad}
                    </li>

                ))}
                {total === 0 ? <p>El carrito esta vacio</p> : <div><p>TOTAL: {formatNumber(total)}</p> <Button variant='success'>Ir a pagar</Button></div>}


            </Container>

        </>
    )
}

export default Cart