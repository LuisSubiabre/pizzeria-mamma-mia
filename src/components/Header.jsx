import React from 'react';
import bgImagen from '../assets/images/header2.png';
import PizzaLogo from '../assets/pizza-logo.svg';
import { motion } from "framer-motion"

export const Header = () => {
    return (
        <>
            <div className="p-5 text-center bg-image" style={{ backgroundImage: `url(${bgImagen})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <motion.img animate={{
                                scale: [1, 2, 2, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                            }} src={PizzaLogo} alt="Pizza Logo" height="64px" width="64px" /><h1 className="mb-3" >Pizzas de Lugi!</h1>
                            <h4 className="mb-3">¡El verdadero sabor de Italia!</h4>
                            <motion.a whileHover={{ scale: 1.1, backgroundColor: '#3498db' }}
                                whileTap={{ scale: 0.9 }}
                                style={{
                                    padding: '10px 20px',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                    border: 'none',
                                    borderRadius: '5px',
                                    backgroundColor: '#2980b9',
                                    color: 'white',
                                }} data-mdb-ripple-init className="btn btn-outline-light btn-lg" href="#!" role="button">Mira nuestra carta</motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
