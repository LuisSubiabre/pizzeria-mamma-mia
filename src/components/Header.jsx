import React from 'react';
import bgImagen from '../assets/images/header2.png';

export const Header = () => {
    return (
        <>
            <div className="p-5 text-center bg-image" style={{ backgroundImage: `url(${bgImagen})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3" >Pizzas de Lugi!</h1>
                            <h4 className="mb-3">¡El verdadero sabor de Italia!</h4>
                            <a data-mdb-ripple-init className="btn btn-outline-light btn-lg" href="#!" role="button">Mira nuestra carta</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
