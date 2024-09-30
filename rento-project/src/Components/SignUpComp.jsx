// import React, { useState } from 'react';
// import axios from 'axios';

// const SignUpComp = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: ''
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
//             const response = await axios.post('http://localhost:8081/signup', formData); // Assurez-vous que le port est correct
//             console.log('Form data submitted successfully:', response.data);
//             setFormData({ name: '', email: '', phone: '' });
//         } catch (err) {
//             console.error('Error submitting form data:', err);
//         }
//     };

//     return (
//         <Container className="d-flex vh-100 bg-light justify-content-center align-items-center">
//             <div className="w-50 bg-white rounded p-4">
//                 <h2 className="mb-4">Inscription</h2>
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group className="mb-3" controlId="formName">
//                         <Form.Label>Nom</Form.Label>
//                         <Form.Control 
//                             type="text" 
//                             placeholder="Entrez votre nom" 
//                             name="name" 
//                             value={formData.name} 
//                             onChange={handleChange} 
//                         />
//                     </Form.Group>

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

//                     <Form.Group className="mb-3" controlId="formPhone">
//                         <Form.Label>Téléphone</Form.Label>
//                         <Form.Control 
//                             type="text" 
//                             placeholder="Entrez votre numéro de téléphone" 
//                             name="phone" 
//                             value={formData.phone} 
//                             onChange={handleChange} 
//                         />
//                     </Form.Group>

//                     <Button variant="primary" type="submit">
//                         Soumettre
//                     </Button>
//                 </Form>
//             </div>
//         </Container>
//     );
// };

// export default SignUpComp;

import React, { useState } from 'react';
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

