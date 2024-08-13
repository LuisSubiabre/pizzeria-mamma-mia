import CardPizza from "./CardPizza";
import { Header } from "./Header";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import { cartaPizza } from "../pizzas";

const Home = () => {
    const [listaPizzas, setListaPizzas] = useState();
    return (
        <>
            <Header />

            <Container className="my-4">
                <Row className="mx-2">

                    {cartaPizza.map((element) => (
                        <Col md={4} key={element.id}>
                            <CardPizza
                                name={element.name}
                                price={element.price}
                                image={element.img}
                                ingredients={element.ingredients}
                                id={element.id}
                            />
                        </Col>
                    ))}


                </Row>
            </Container>
        </>
    );
}
export default Home;
