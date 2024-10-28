// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const ReservationAdmin = () => {
//     const [reservations, setReservations] = useState([]);
//     const [selectedReservation, setSelectedReservation] = useState(null);

//     useEffect(() => {
//         axios.get("http://localhost:8081/reservationAdmin")
//             .then(res => setReservations(res.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8081/delete/${id}`);
//             setReservations(reservations.filter(reservation => reservation.id_reservation !== id));
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     const handleViewDetails = (reservation) => {
//         setSelectedReservation(reservation);
//     };

//     const handleClose = () => {
//         setSelectedReservation(null);
//     };

//     return (
//         <div className="flex flex-col min-h-screen bg-gray-900 justify-center items-center">
//             {!selectedReservation ? (
//                 <div className="container bg-white rounded-lg p-6 shadow-lg mb-6">
//                     <Link 
//                         to="/create" 
//                         className="inline-block bg-green-500 text-white py-2 px-4 rounded mb-4 hover:bg-green-600 transition duration-300"
//                     >
//                         Ajouter +
//                     </Link>
//                     <div className="overflow-x-auto">
//                         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//                             <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
//                                 <tr>
//                                     <th className="py-2 px-1  text-center">ID Reservation</th>
//                                     <th className="py-2 px-1  text-center">Nom</th>
//                                     <th className="py-2 px-4 text-center">Email</th>
//                                     <th className="py-2 px-4 text-center">Type Véhicule</th>
//                                     <th className="py-2 px-4 text-center">Modèle Véhicule</th>
//                                     <th className="py-2 px-4 text-center">Prix Véhicule</th>
//                                     <th className="py-3 px-6 text-center">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="text-gray-700 text-sm font-light">
//                                 {reservations.map((reservation, i) => (
//                                     <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
//                                         <td className="text-center">{reservation.id_reservation}</td>
//                                         <td className="py-1 px-2 text-center">{reservation.nom_clients}</td>
//                                         <td className="py-1 px-2 text-center">{reservation.email_clients}</td>
//                                         <td className="py-1 px-2 text-center">{reservation.type_vehicules}</td>
//                                         <td className="py-1 px-2 text-center">{reservation.modele_vehicules}</td>
//                                         <td className="py-1 px-2 text-center">{reservation.prix_vehicules}</td>
//                                         <td className="py-1 px-2 text-center">
//                                             <button 
//                                                 className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600 transition duration-300"
//                                                 onClick={() => handleViewDetails(reservation)}
//                                             >
//                                                 Lire
//                                             </button>
//                                             <Link 
//                                                 to={`/update/${reservation.id_reservation}`} 
//                                                 className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition duration-300"
//                                             >
//                                                 Mettre à jour
//                                             </Link>
//                                             <button 
//                                                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
//                                                 onClick={() => handleDelete(reservation.id_reservation)}
//                                             >
//                                                 Effacer
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="w-1/2 bg-white rounded-lg p-6 shadow-lg">
//                     <h3 className="text-center text-2xl font-semibold mb-4">Détails de la réservation</h3>
//                     <p><strong>ID Reservation:</strong> {selectedReservation.id_reservation}</p>
//                     <p><strong>Nom du Client:</strong> {selectedReservation.nom_clients}</p>
//                     <p><strong>Email du Client:</strong> {selectedReservation.email_clients}</p>
//                     <p><strong>Type de Véhicule:</strong> {selectedReservation.type_vehicules}</p>
//                     <p><strong>Modèle du Véhicule:</strong> {selectedReservation.modele_vehicules}</p>
//                     <p><strong>Prix du Véhicule:</strong> {selectedReservation.prix_vehicules}</p>
//                     <img src={selectedReservation.image_url} alt={selectedReservation.modele_vehicules} className="w-full h-64 object-cover mt-4" />
//                     <button 
//                         className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition duration-300"
//                         onClick={handleClose}
//                     >
//                         Retour
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ReservationAdmin;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ReservationAdmin = () => {
    const [reservations, setReservations] = useState([]); // État pour stocker les réservations
    const [selectedReservation, setSelectedReservation] = useState(null); // État pour la réservation sélectionnée

    useEffect(() => {
        // Récupérer les réservations depuis l'API
        axios.get("http://localhost:8081/reservationAdmin")
            .then(res => setReservations(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            // Envoyer une requête DELETE pour supprimer la réservation
            await axios.delete(`http://localhost:8081/delete/${id}`);
            // Mettre à jour l'état pour retirer la réservation supprimée
            setReservations(reservations.filter(reservation => reservation.id_reservation !== id));
        } catch (err) {
            console.log(err); // Afficher l'erreur dans la console
        }
    };

    const handleViewDetails = (reservation) => {
        setSelectedReservation(reservation); // Sélectionner la réservation pour afficher ses détails
    };

    const handleClose = () => {
        setSelectedReservation(null); // Fermer les détails de la réservation
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 justify-center items-center">
            {!selectedReservation ? (
                <div className="container bg-white rounded-lg p-6 shadow-lg mb-6">
                    <Link 
                        to="/create" 
                        className="inline-block bg-green-500 text-white py-2 px-4 rounded mb-4 hover:bg-green-600 transition duration-300"
                    >
                        Ajouter +
                    </Link>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <tr>
                                    <th className="py-2 px-1 text-center">ID Reservation</th>
                                    <th className="py-2 px-1 text-center">Nom</th>
                                    <th className="py-2 px-4 text-center">Email</th>
                                    <th className="py-2 px-4 text-center">Type Véhicule</th>
                                    <th className="py-2 px-4 text-center">Modèle Véhicule</th>
                                    <th className="py-2 px-4 text-center">Prix Véhicule</th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 text-sm font-light">
                                {reservations.map((reservation, i) => (
                                    <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="text-center">{reservation.id_reservation}</td>
                                        <td className="py-1 px-2 text-center">{reservation.nom_clients}</td>
                                        <td className="py-1 px-2 text-center">{reservation.email_clients}</td>
                                        <td className="py-1 px-2 text-center">{reservation.type_vehicules}</td>
                                        <td className="py-1 px-2 text-center">{reservation.modele_vehicules}</td>
                                        <td className="py-1 px-2 text-center">{reservation.prix_vehicules}</td>
                                        <td className="py-1 px-2 text-center">
                                            <button 
                                                className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600 transition duration-300"
                                                onClick={() => handleViewDetails(reservation)}
                                            >
                                                Lire
                                            </button>
                                            <Link 
                                                to={`/update/${reservation.id_reservation}`} 
                                                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition duration-300"
                                            >
                                                Mettre à jour
                                            </Link>
                                            <button 
                                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                                                onClick={() => handleDelete(reservation.id_reservation)} // Appel de la méthode de suppression
                                            >
                                                Effacer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="w-1/2 bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-center text-2xl font-semibold mb-4">Détails de la réservation</h3>
                    <p><strong>ID Reservation:</strong> {selectedReservation.id_reservation}</p>
                    <p><strong>Nom du Client:</strong> {selectedReservation.nom_clients}</p>
                    <p><strong>Email du Client:</strong> {selectedReservation.email_clients}</p>
                    <p><strong>Type de Véhicule:</strong> {selectedReservation.type_vehicules}</p>
                    <p><strong>Modèle du Véhicule:</strong> {selectedReservation.modele_vehicules}</p>
                    <p><strong>Prix du Véhicule:</strong> {selectedReservation.prix_vehicules}</p>
                    <img src={selectedReservation.image_url} alt={selectedReservation.modele_vehicules} className="w-full h-64 object-cover mt-4" />
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition duration-300"
                        onClick={handleClose}
                    >
                        Retour
                    </button>
                </div>
            )}
        </div>
    );
};

export default ReservationAdmin;
