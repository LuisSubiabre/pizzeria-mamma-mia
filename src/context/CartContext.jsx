import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const addToCart = (element) => {
        setCarrito((prevState) => {
            const exist = prevState.find((x) => x.id === element.id);
            let newCart;
            if (exist) {
                newCart = prevState.map((x) => x.id === element.id ? { ...exist, cantidad: exist.cantidad + 1 } : x);
            } else {
                newCart = [...prevState, { ...element, cantidad: 1 }];
            }
            calcularTotal(newCart);
            return newCart;
        });
    };
    const calcularTotal = (carritoRender) => {
        const nuevoTotal = carritoRender.reduce((a, c) => a + c.price * c.cantidad, 0);
        setCount(nuevoTotal);
    };

    return (
        <CartContext.Provider value={{ count, setCount, carrito, setCarrito, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider; 
