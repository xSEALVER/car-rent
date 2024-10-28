// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate, useParams, Link } from 'react-router-dom';

// const UpdateReservation = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const { id } = useParams();
//     const navigate = useNavigate();

//     function handleSubmit(event) {
//         event.preventDefault();
//         axios.put(`http://localhost:8081/update/${id}`, { name, email })
//             .then(res => {
//                 console.log(res);
//                 alert("Vos modifications ont été bien enregistrées");
//                 navigate('/');
//             }).catch(err => console.log(err));
//     }

//     const handleBack = () => {
//         navigate('/');
//     };

//     return (
//         <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
//             <div className='w-50 bg-white rounded p-3 position-relative'>
//             <div className='d-flex justify-content-end mb-3'>
//                     <Link to='/admin-dashboard' className='btn btn-primary'>Retour</Link>
//             </div>
//                 <form onSubmit={handleSubmit}>
//                     <h2>Mettre à jour une Réservation</h2>
//                     <div className='mb-2'>
//                         <label htmlFor="name">Prénom</label>
//                         <input type="text" id="name" placeholder='Entrez le prénom' className='form-control'
//                             value={name}
//                             onChange={e => setName(e.target.value)}
//                         />
//                     </div>

//                     <div className='mb-2'>
//                         <label htmlFor="email">Email</label>
//                         <input type="email" id="email" placeholder="Entrez l'email" className='form-control'
//                             value={email}
//                             onChange={e => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <button type='submit' className='btn btn-success'>Confirmer</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UpdateReservation;

// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams, Link } from 'react-router-dom';

// const UpdateReservation = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [id_vehicules, setIdVehicule] = useState('');
//     const [date_reservation, setDateReservation] = useState('');
//     const [date_fin_reservation, setDateFinReservation] = useState('');
//     const { id } = useParams();
//     const navigate = useNavigate();

//     // Fetch reservation data when the component mounts
//     useEffect(() => {
//         const fetchReservation = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8081/update/${id}`);
//                 const { nom_clients, email_clients, id_vehicules, date_reservation, date_fin_reservation } = response.data;

//                 setName(nom_clients);
//                 setEmail(email_clients);
//                 setIdVehicule(id_vehicules);
//                 setDateReservation(date_reservation);
//                 setDateFinReservation(date_fin_reservation);
//             } catch (error) {
//                 console.error("Erreur lors de la récupération des données de réservation :", error);
//             }
//         };

//         fetchReservation();
//     }, [id]);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.put(`http://localhost:8081/reservationAdmin/${id}`, {
//             nom_clients: name,
//             email_clients: email,
//             id_vehicules,
//             date_reservation,
//             date_fin_reservation
//         })
//             .then(res => {
//                 console.log(res);
//                 alert("Vos modifications ont été bien enregistrées");
//                 navigate('/admin-dashboard');
//             }).catch(err => console.log(err));
//     };

//     const handleBack = () => {
//         navigate('/admin-dashboard');
//     };

//     return (
//         <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
//             <div className='w-50 bg-white rounded p-3 position-relative'>
//                 <div className='d-flex justify-content-end mb-3'>
//                     <Link to='/admin-dashboard' className='btn btn-primary'>Retour</Link>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     <h2>Mettre à jour une Réservation</h2>
//                     <div className='mb-2'>
//                         <label htmlFor="name">Prénom</label>
//                         <input type="text" id="name" placeholder='Entrez le prénom' className='form-control'
//                             value={name}
//                             onChange={e => setName(e.target.value)}
//                         />
//                     </div>

//                     <div className='mb-2'>
//                         <label htmlFor="email">Email</label>
//                         <input type="email" id="email" placeholder="Entrez l'email" className='form-control'
//                             value={email}
//                             onChange={e => setEmail(e.target.value)}
//                         />
//                     </div>

//                     <div className='mb-2'>
//                         <label htmlFor="id_vehicules">ID Véhicule</label>
//                         <input type="text" id="id_vehicules" placeholder="Entrez l'ID du véhicule" className='form-control'
//                             value={id_vehicules}
//                             onChange={e => setIdVehicule(e.target.value)}
//                         />
//                     </div>

//                     <div className='mb-2'>
//                         <label htmlFor="date_reservation">Date de réservation</label>
//                         <input type="date" id="date_reservation" className='form-control'
//                             value={date_reservation}
//                             onChange={e => setDateReservation(e.target.value)}
//                         />
//                     </div>

//                     <div className='mb-2'>
//                         <label htmlFor="date_fin_reservation">Date de fin de réservation</label>
//                         <input type="date" id="date_fin_reservation" className='form-control'
//                             value={date_fin_reservation}
//                             onChange={e => setDateFinReservation(e.target.value)}
//                         />
//                     </div>

//                     <button type='submit' className='btn btn-success'>Confirmer</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UpdateReservation;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

const UpdateReservation = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id_vehicules, setIdVehicule] = useState('');
    const [date_reservation, setDateReservation] = useState('');
    const [date_fin_reservation, setDateFinReservation] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    // Fetch reservation data when the component mounts
    useEffect(() => {
        const fetchReservation = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/update/${id}`);
                const { nom_clients, email_clients, id_vehicules, date_reservation, date_fin_reservation } = response.data;

                setName(nom_clients);
                setEmail(email_clients);
                setIdVehicule(id_vehicules);
                setDateReservation(date_reservation);
                setDateFinReservation(date_fin_reservation);
            } catch (error) {
                console.error("Erreur lors de la récupération des données de réservation :", error);
            }
        };

        fetchReservation();
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8081/update/${id}`, {
            nom_clients: name,
            email_clients: email,
            id_vehicules,
            date_reservation,
            date_fin_reservation
        })
            .then(res => {
                console.log(res);
                alert("Vos modifications ont été bien enregistrées");
                navigate('/admin-dashboard');
            }).catch(err => console.log(err));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-end mb-4">
                    <Link to='/admin-dashboard' className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                        Retour
                    </Link>
                </div>
                <h2 className="text-2xl font-semibold text-center mb-6">Mettre à jour une Réservation</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom</label>
                        <input
                            type="text"
                            id="name"
                            placeholder='Entrez le nom'
                            className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Entrez l'email"
                            className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="id_vehicules" className="block text-gray-700 font-medium mb-2">ID Véhicule</label>
                        <input
                            type="text"
                            id="id_vehicules"
                            placeholder="Entrez l'ID du véhicule"
                            className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                            value={id_vehicules}
                            onChange={e => setIdVehicule(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="date_reservation" className="block text-gray-700 font-medium mb-2">Date de réservation</label>
                        <input
                            type="date"
                            id="date_reservation"
                            className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                            value={date_reservation}
                            onChange={e => setDateReservation(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="date_fin_reservation" className="block text-gray-700 font-medium mb-2">Date de fin de réservation</label>
                        <input
                            type="date"
                            id="date_fin_reservation"
                            className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                            value={date_fin_reservation}
                            onChange={e => setDateFinReservation(e.target.value)}
                        />
                    </div>

                    <button type='submit' className='w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300'>
                        Confirmer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateReservation;

