import React from 'react';
import { useLocation } from 'react-router-dom';

const TestComponents = () => {
    const location = useLocation(); // Access the location object from React Router
    const { name, email } = location.state || {}; // Destructure name and email from state

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
            {name && email ? (
                <div>
                    <p className="text-xl">Name: {name}</p>
                    <p className="text-xl">Email: {email}</p>
                </div>
            ) : (
                <p className="text-xl">No user data available. Please sign in.</p>
            )}
        </div>
    );
};

export default TestComponents;
