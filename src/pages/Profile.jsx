import React from 'react'
import { Container, Row, Figure, Button } from 'react-bootstrap'
import profileImg from '../assets/images/profile.png'
import { motion } from 'framer-motion';


export const Profile = () => {
    return (
        <Container >
            <Figure className="my-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Figure.Image
                    width={150}
                    height={150}
                    alt="Perfil de usuario"
                    src={profileImg}

                />
            </Figure>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} className="formulario">



                <h4 className='text-center'>Bienvenido: usuario@luigi.com</h4>

                <Button variant="warning" className="w-100 my-2" >Cerrar sesión</Button>

            </motion.div>
        </Container>
    )
}
