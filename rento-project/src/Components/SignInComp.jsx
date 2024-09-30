// import React, { useState } from 'react';
// import axios from 'axios';

// const SignIpComp = () => {
//     const [formData, setFormData] = useState({
//         email: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log('Form data to be submitted:', formData); // Debugging
//         try {
//             const response = await axios.post('http://localhost:8081/signin', formData); // Assurez-vous que le port est correct
//             console.log('Form data submitted successfully:', response.data);
//             setFormData({ email: '' });
//         } catch (err) {
//             console.error('Error submitting form data:', err);
//         }
//     };

//     return (
//         <Container className="d-flex vh-100 bg-light justify-content-center align-items-center">
//             <div className="w-50 bg-white rounded p-4">
//                 <h2 className="mb-4">Connexion</h2>
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group className="mb-3" controlId="formEmail">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control 
//                             type="email" 
//                             placeholder="Entrez votre email" 
//                             name="email" 
//                             value={formData.email} 
//                             onChange={handleChange} 
//                         />
//                     </Form.Group>

//                     <Button variant="primary" type="submit">
//                         Connexion
//                     </Button>
//                 </Form>
//             </div>
//         </Container>
//     );
// };

// export default SignIpComp;

import React, { useState } from 'react';
import axios from 'axios';

const SignIpComp = () => {
    const [formData, setFormData] = useState({
        email: ''
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
            const response = await axios.post('http://localhost:8081/signin', formData);
            console.log('Form data submitted successfully:', response.data);
            setFormData({ email: '' });
        } catch (err) {
            console.error('Error submitting form data:', err);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Connexion</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Entrez votre email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Connexion
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIpComp;
