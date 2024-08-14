import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import { cartaPizza } from "../pizzas";



const Cart = () => {
    const [cart, setCart] = React.useState([])
    const [listaPizza, setListaPizza] = React.useState(cartaPizza)
    const [disabled, setDisabled] = React.useState(true)

    const agregarAlCarrito = (element) => {
        const buscar = cart.find((buscar) => buscar.id === element.id)
        if (buscar) {

            console.log("existe")
            //setCart(cart.map((buscar) => buscar.id === element.id ? { ...buscar, cantidad: buscar.cantidad + 1 } : buscar))
            setCart(buscarCart => {
                return buscarCart.map((buscar) => { //mapeo el carrito
                    if (buscar.id === element.id) { //si el id del carrito es igual al id del elemento
                        setDisabled(false)
                        return { ...buscar, cantidad: buscar.cantidad + 1 } //devuelvo el carrito con la cantidad +1
                    } else {
                        return buscar //devuelvo el carrito sin modificar
                    }
                })
            })
            return
        } else {
            setDisabled(false)
            setCart([...cart, { id: element.id, cantidad: 1 }])
            return
        }
    }

    const quitarlCarrito = (element) => {

        const buscar = cart.find((buscar) => buscar.id === element.id)
        if (buscar) {
            if (buscar.cantidad <= 1) {
                setDisabled(true)
                console.log("eliminar")
            }
            setCart(cart.map((buscar) => buscar.id === element.id ? { ...buscar, cantidad: buscar.cantidad - 1 } : buscar))
            return
        }
    }



    const buscarCantidad = (id) => {

        if (cart.find((element) => element.id === id)) {
            return cart.find((element) => element.id === id).cantidad
        } else {
            return '-'
        }
    }

    return (
        <>
            <h2>cart</h2>
            <ListGroup>
                {listaPizza.map((element) => (
                    <ListGroup.Item key={element.id}>
                        {element.name}
                        <Button
                            disabled={!cart.find((item) => item.id === element.id) || cart.find((item) => item.id === element.id).cantidad <= 0}
                            onClick={() => quitarlCarrito(element)}
                        >
                            -
                        </Button>

                        {buscarCantidad(element.id)}
                        <Button onClick={() => agregarAlCarrito(element)}>+</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            {cart.map((element) => element.cantidad)}
        </>
    )
}

export default Cart