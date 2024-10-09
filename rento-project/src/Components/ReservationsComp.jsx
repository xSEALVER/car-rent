import { useState, useEffect } from 'react';

const ReservationsComp = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('http://localhost:8081/reservation');
        if (!response.ok) {
          throw new Error('Failed to fetch reservations');
        }
        const data = await response.json();
        setReservations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Reservations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reservations.map((reservation) => (
          <div key={reservation.id_reservation} className="border rounded-lg p-4">
            <img 
              src={reservation.image_url} 
              alt={reservation.marque_vehicules} 
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{reservation.marque_vehicules}</h2>
            <p>Model: {reservation.modele_vehicules}</p>
            <p>Type: {reservation.type_vehicules}</p>
            <p>Price: ${reservation.prix_vehicules}/day</p>
            <p>Reservation Start: {new Date(reservation.date_reservation).toLocaleDateString()}</p>
            <p>Reservation End: {new Date(reservation.date_fin_reservation).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationsComp;
