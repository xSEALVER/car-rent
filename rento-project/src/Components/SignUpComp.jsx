import React, { useState } from 'react';
import axios from 'axios';

const SignUpComp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '' // Adding password to the form data state
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
        console.log('Form data to be submitted:', formData); // Log form data for debugging

        try {
            // Log the password field explicitly
            if (!formData.password) {
                console.error('Password is empty');
                return;
            }

            const response = await axios.post('http://localhost:8081/signup', formData); // Ensure the port is correct
            console.log('Form data submitted successfully:', response.data);

            // Reset the form
            setFormData({ name: '', email: '', phone: '', password: '' });
        } catch (err) {
            console.error('Error submitting form data:', err.response?.data || err); // Detailed error logging
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg bg-white rounded p-6 shadow-lg">
                <h2 className="mb-6 text-2xl font-semibold">Inscription</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Nom</label>
                        <input
                            type="text"
                            placeholder="Entrez votre nom"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Entrez votre email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">Téléphone</label>
                        <input
                            type="text"
                            placeholder="Entrez votre numéro de téléphone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">Mot de passe</label>
                        <input
                            type="password"
                            placeholder="Entrez votre mot de passe"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Soumettre
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpComp;
