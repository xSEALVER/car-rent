import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useUser } from '../context/UserContext'; // Import UserContext


const SignInComp = () => {
    const navigate = useNavigate(); // Initialize navigate
    const { setUserEmail } = useUser(); // Get setUserEmail from context
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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

        try {
            const response = await axios.post('http://localhost:8081/signin', formData);
            console.log('Sign-in successful:', response.data);

            const userData = response.data; // Adjust according to your API response
            setUserEmail(userData.email); // Set email in context

            // Navigate to /trips with user data
            navigate("/carlist", { 
                state: { 
                    name: `${userData.firstName} ${userData.lastName}`, 
                    email: userData.email 
                } 
            });

            // Optionally, reset the form
            setFormData({ email: '', password: '' });
        } catch (err) {
            console.error('Error signing in:', err.response?.data || err);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg bg-white rounded p-6 shadow-lg">
                <h2 className="mb-6 text-2xl font-semibold">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
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
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignInComp;
