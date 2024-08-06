import React, { useState, useEffect } from 'react';
import { Badge, Button, Col, Row, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { formatNumber } from '../scripts.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
    const total = 25000;
    const token = false;

    // /*https://www.w3schools.com/jsref/jsref_tolocalestring_number.asp*/
    // const totalFormateado = total.toLocaleString('es-CL', {
    //     style: 'currency',
    //     currency: 'CLP',
    //     minimumFractionDigits: 0,
    // });

    // Cargar el tema guardado en localStorage o usar el tema claro por defecto
    // aun no :)
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'light' : false;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const handleThemeChange = (theme) => {
        const isDark = theme === 'oscuro';
        setIsDarkMode(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light'); // Guardar en localStorage
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary footer">
            <Container>
                <Navbar.Brand href="#">Pizzas de Luigi!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#"><Button variant='ligth'>🍕 Home</Button></Nav.Link>
                        <Nav.Link href="#">  <Button variant='ligth'> {token ? '🔓 Profile' : '🔒 Register'}</Button></Nav.Link>
                        <Nav.Link href="#"><Button variant='ligth'> {token ? '🔐 Logout' : '🔐 Login'}</Button></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#"><Button variant="success" style={{ margin: '0 5px' }}>🛒 Total: {formatNumber(total)}</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};
export default MyNavbar;
