import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to access the passed state

const TestSignup = () => {
    const location = useLocation(); // Access the location object from React Router
    const { name, email } = location.state || {}; // Destructure name and email from state

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Bienvenue, {name || 'Utilisateur'}</h2>
                <p className="mb-2">Votre email: {email || 'Non disponible'}</p>
            </div>
        </div>
    );
};

export default TestSignup;
