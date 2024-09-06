import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        calcularTotal();
    }, [cart]);

    const addToCart = (element) => {
        setCart((prevState) => {
            const exist = prevState.find((x) => x.id === element.id);

            if (exist) {
                //setNewCart(prevState.map((x) => x.id === element.id ? { ...exist, cantidad: exist.cantidad + 1 } : x));
                return prevState.map((x) => x.id === element.id ? { ...exist, cantidad: exist.cantidad + 1 } : x);

            } else {
                // setNewCart([...prevState, { ...element, cantidad: 1 }]);
                return [...prevState, { ...element, cantidad: 1 }];
            }
            return prevState;

        });
    };


    /* funcion para disminuir carrito  */
    const removeFromCart = (element) => {
        setCart((prevState) => {
            const exist = cart.find((x) => x.id === element.id)

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
            return prevState;
        })
    }


    const calcularTotal = () => {
        let nuevoValor = cart.reduce((a, c) => a + c.price * c.cantidad, 0);
        setCount(nuevoValor);

    };

    return (
        <CartContext.Provider value={{ count, cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider; 
