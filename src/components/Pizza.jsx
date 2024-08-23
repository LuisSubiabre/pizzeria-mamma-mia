import { useEffect, useState } from 'react'
import CardPizza from './CardPizza'
import { Row, Col, Container } from "react-bootstrap";

const Pizza = () => {
    const [pizza, setPizza] = useState([]);

    const queryPizza = async () => {
        const url = "http://localhost:5000/api/pizzas/p001";
        const reponse = await fetch(url);
        const data = await reponse.json();
        setPizza(data);


    }
    useEffect(() => {
        queryPizza();
    }, [])


    // Si no hay datos en pizza o ingredientess, muestra un mensaje de carga mientras carga la pizza, si no da error
    if (!pizza || !pizza.ingredients) {
        return <div>Cargando...</div>;
    }
    return (
        <>

            <Container >
                <Row className="justify-content-md-center">
                    <Col md={6} key={pizza.id}>
                        <CardPizza
                            name={pizza.name}
                            desc={pizza.desc}
                            price={pizza.price}
                            image={pizza.img}
                            ingredients={pizza.ingredients}
                            id={pizza.id}
                            verMas={false}
                        />
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default Pizza