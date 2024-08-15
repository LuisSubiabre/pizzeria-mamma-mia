import React, { useState } from 'react'
import { cartaPizza } from "../pizzas";
import { Button, Container, Row, Col, Card, ListGroup } from 'react-bootstrap'
import CardPizza from "./CardPizza";
import { formatNumber } from '../scripts.js';



const Cart = () => {
    const [listaPizzas, setListaPizzas] = useState(cartaPizza)
    const [carrito, setCarrito] = useState([])

    /*Funcion para agregar al carrito */
    const addToCart = (element) => {
        setCarrito((prevState) => {
            const exist = carrito.find((x) => x.id === element.id)

            if (exist) {
                /*Si el producto ya existe en el carrito, se aumenta la cantidad en 1 */
                return prevState.map((x) => x.id === element.id ? { ...exist, cantidad: exist.cantidad + 1 } : x)

            }
            else {
                /*Si el producto no existe en el carrito, se agrega al carrito */
                return [...carrito, { ...element, cantidad: 1 }]

            }
        })
    }

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

            /*Si el producto es 0 se quita del carrito */

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
            <Container className="my-4">
                <Row className="mx-2">
                    {listaPizzas.map((element) => (

                        <Col md={4} key={element.id}>
                            <Card className="card-pizza mt-4">
                                <Card.Img variant="top" src={element.img} alt={element.im} />

                                <Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <Card.Title>{element.name}</Card.Title>
                                        <HorizontalLine color="gray" />
                                        <Card.Text>
                                            🍽️<strong>Ingredientes: </strong>{element.ingredients.join(", ")}
                                        </Card.Text>
                                        <HorizontalLine color="gray" />
                                        <h4 className='text-center'>Precio: {formatNumber(element.price)}</h4>

                                        <div className="d-flex justify-content-around py-2">
                                            <a href={`/pizza/${element.id}`}><Button variant="outline-success">Ver más</Button></a>
                                            <Button onClick={() => removeFromCart(element)} variant="danger"> - </Button>
                                            <Button onClick={() => addToCart(element)} variant="success"> + </Button>
                                        </div>
                                    </ListGroup>
                                </Card.Body>
                            </Card>


                        </Col>
                    ))}
                </Row>
            </Container>

            <h4>Total del carrito: </h4>
            {carrito.map((element) => (
                <li key={element.id}>
                    {element.name} ${element.price} x {element.cantidad}
                </li>

            ))}
            <p>TOTAL: {total}</p>

        </>
    )
}

export default Cart