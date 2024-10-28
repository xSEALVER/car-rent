import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CreateReservation = () => {
    const [nomClients, setNomClients] = useState('');
    const [emailClients, setEmailClients] = useState('');
    const [idVehicules, setIdVehicules] = useState('');
    const [dateReservation, setDateReservation] = useState('');
    const [dateFinReservation, setDateFinReservation] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/create', { 
            nom_clients: nomClients, 
            email_clients: emailClients,
            id_vehicules: idVehicules, 
            date_reservation: dateReservation, 
            date_fin_reservation: dateFinReservation 
        })
        .then((res) => {
            console.log(res);
            navigate('/admin-dashboard');
        })
        .catch((err) => console.log(err));
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 justify-center items-center">
            <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-lg">
                <div className="flex justify-end mb-4">
                    <Link 
                        to="/admin-dashboard" 
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Retour
                    </Link>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-2xl font-semibold text-center mb-4">Ajouter réservation</h2>

                    <div>
                        <label htmlFor="nomClients" className="block text-gray-700 font-medium mb-2">Nom</label>
                        <input
                            type="text"
                            id="nomClients"
                            placeholder="Entrez le nom du client"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setNomClients(e.target.value)}
                            value={nomClients}
                        />
                    </div>

                    <div>
                        <label htmlFor="emailClients" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="emailClients"
                            placeholder="Entrez l'email du client"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setEmailClients(e.target.value)}
                            value={emailClients}
                        />
                    </div>

                    <div>
                        <label htmlFor="idVehicules" className="block text-gray-700 font-medium mb-2">ID du Véhicule</label>
                        <input
                            type="text"
                            id="idVehicules"
                            placeholder="Entrez l'ID du véhicule"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setIdVehicules(e.target.value)}
                            value={idVehicules}
                        />
                    </div>

                    <div>
                        <label htmlFor="dateReservation" className="block text-gray-700 font-medium mb-2">Date de Début</label>
                        <input
                            type="date"
                            id="dateReservation"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setDateReservation(e.target.value)}
                            value={dateReservation}
                        />
                    </div>

                    <div>
                        <label htmlFor="dateFinReservation" className="block text-gray-700 font-medium mb-2">Date de Fin</label>
                        <input
                            type="date"
                            id="dateFinReservation"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setDateFinReservation(e.target.value)}
                            value={dateFinReservation}
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300"
                    >
                        Soumettre
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateReservation;
