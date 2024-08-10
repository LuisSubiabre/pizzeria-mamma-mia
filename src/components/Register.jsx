import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [PasswordConfirmationError, setPasswordConfirmationError] = useState('');

    const validarFormulario = (e) => {
        e.preventDefault();
        console.log(email, password, confirmPassword);
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (value.length < 6) {
            setPasswordError('El password debe tener al menos 6 caracteres');
        } else {
            setPasswordError('');
        }

        if (confirmPassword && value !== confirmPassword) {
            setPasswordConfirmationError('El password y la confirmación del password deben ser iguales');
        } else {
            setPasswordConfirmationError('');
        }
    }


    const handlePasswordConfirmation = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);

        if (password !== value) {
            setPasswordConfirmationError('El password y la confirmación del password deben ser iguales');
        } else {
            setPasswordConfirmationError('');
        }
    }


    return (
        <Container className="my-4">
            <h4>Registrate y sé parte de Luigi's Family</h4>
            <Form onSubmit={validarFormulario}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={handlePasswordChange} placeholder="Enter password" />
                    {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
                </Form.Group>

                <Form.Group controlId="formConfirmPassword">
                    <Form.Label>Confirmar Password</Form.Label>
                    <Form.Control type="password" onChange={handlePasswordConfirmation} placeholder="Confirm password" />
                    {PasswordConfirmationError && <Form.Text className="text-danger">{PasswordConfirmationError}</Form.Text>}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    );
};

export default Register;
