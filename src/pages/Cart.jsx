import React, { useState, useContext } from 'react';
import { cartaPizza } from "../pizzas.js";
import { Button, Container, ListGroup, Badge, Image } from 'react-bootstrap';
import { formatNumber } from '../scripts.js';
import { CartContext } from '../context/CartContext.jsx';
import { UserContext } from '../context/UserContext.jsx';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { showAlert } from '../utils/helpers';

const Cart = () => {
    const { cart, setCart, addToCart, removeFromCart, count, pedido, setPedido } = useContext(CartContext);
    const { auth } = useContext(UserContext);

    const checkout = async () => {
        if (cart.length > 0) {
            const response = await fetch('http://localhost:5000/api/checkouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ cart }),
            });

            if (!response.ok) {
                throw new Error("Error en el proceso de compra");
            }
            const data = await response.json();
            console.log('Checkout exitoso:', data);

            // Genera un nuevo código de seguimiento
            const trackingCode = Date.now();
            setPedido(trackingCode); // Actualiza el estado con el nuevo código

            // Muestra la alerta con el código actualizado
            showAlert('success', 'Compra exitosa. Tu pedido llegará en 30 minutos. Código de seguimiento: ' + trackingCode);

            setCart([]); // Limpia el carrito
        }
    }

    return (
        <>
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
                {count === 0 ? (
                    <p>El carrito está vacío</p>
                ) : (
                    <div>
                        <p>TOTAL: {formatNumber(count)}</p>
                        {auth ? (
                            <Button variant='success' onClick={checkout}>Ir a pagar</Button>
                        ) : (
                            <Nav.Link as={Link} to="/login">
                                <Button variant='danger'>Inicia sesión para pagar</Button>
                            </Nav.Link>
                        )}
                    </div>
                )}
                {pedido && <p>Tu pedido {pedido} se encuentra en camino.</p>}
            </Container>
        </>
    );
}

export default Cart;