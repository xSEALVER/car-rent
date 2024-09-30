import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const SignUpComp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data to be submitted:', formData); // Debugging
        try {
            const response = await axios.post('http://localhost:8081/signup', formData); // Assurez-vous que le port est correct
            console.log('Form data submitted successfully:', response.data);
            setFormData({ name: '', email: '', phone: '' });
        } catch (err) {
            console.error('Error submitting form data:', err);
        }
    };

    return (
        <Container className="d-flex vh-100 bg-light justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-4">
                <h2 className="mb-4">Inscription</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Entrez votre nom" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Entrez votre email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Label>Téléphone</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Entrez votre numéro de téléphone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Soumettre
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default SignUpComp;