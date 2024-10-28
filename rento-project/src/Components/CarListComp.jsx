import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation } from 'react-router-dom';


const CarListComp = () => {
  const location = useLocation();
  const { name, email } = location.state || {}; // Destructure id_clients
  const id_clients = localStorage.getItem("id_clients"); // Retrieve without displaying
  console.log("Client ID: ", id_clients); // Check if this prints the correct id
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New states for date selection
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Filters
  const [filterType, setFilterType] = useState('');
  const [filterMarque, setFilterMarque] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:8081/carlist');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCars(data);
        setFilteredCars(data); // Set filtered cars initially to all cars
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Filter logic
  const handleFilterChange = () => {
    let filtered = cars;

    if (filterType) {
      filtered = filtered.filter((car) => car.type_vehicules === filterType);
    }
    if (filterMarque) {
      filtered = filtered.filter((car) => car.marque_vehicules === filterMarque);
    }

    setFilteredCars(filtered);
  };

  // Open Modal with car details
  const handleCarClick = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
    setStartDate(null);
    setEndDate(null);
  };

  // Function to calculate the number of days between two dates
  const calculateDaysDifference = (start, end) => {
    const timeDiff = end - start;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert time diff to days
    return daysDiff;
  };

  

  // Function to add reservation
  const addReservation = async (car) => {
    if (!startDate || !endDate) {
        alert('Please select a start and end date for the reservation.');
        return;
    }

    const daysDiff = calculateDaysDifference(startDate, endDate);
    if (daysDiff < 1) {
        alert('End date must be later than start date.');
        return;
    }

    const adjustedPrice = car.prix_vehicules * daysDiff;

    // Now this will have the correct value
    const reservationData = {
        id_vehicules: car.id_vehicules,
        id_clients: id_clients,  // Use the destructured id_clients
        id_agence: car.id_agence,
        date_reservation: startDate,
        date_fin_reservation: endDate,
        prix_total: adjustedPrice,
    };

    try {
        const response = await fetch('http://localhost:8081/addReservation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservationData),
        });

        if (!response.ok) {
            throw new Error('Failed to add reservation');
        }

        alert(`Reservation added successfully! Total Price: $${adjustedPrice}`);
        closeModal();
    } catch (err) {
        console.error(err);
        alert('Failed to add reservation.');
    }
};

  // Handle filters when they change
  useEffect(() => {
    handleFilterChange();
  }, [filterType, filterMarque]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className=" ">
       <h2 className="text-2xl font-semibold mb-4 text-center">Bienvenue, {name || 'Utilisateur'}!</h2>
       <p className="mb-2 text-center">Votre email: {email || 'Non disponible'}</p>
      <div className="container mx-8">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3 text-center">
          Car List
        </h1>
        <p className="text-sm pb-10 text-center">
          Choose the perfect car for your needs!
        </p>

        {/* Filters */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div>
            <label>Filter by Type:</label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="">All Types</option>
              <option value="SUV">SUV</option>
              <option value="Citadine">Citadine</option>
              <option value="Utilitaire">Utilitaire</option>
              {/* Add more vehicle types as needed */}
            </select>
          </div>
          <div>
            <label>Filter by Marque:</label>
            <select
              value={filterMarque}
              onChange={(e) => setFilterMarque(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="">All Marques</option>
              <option value="Renault">Renault</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Alfa Romeo">Alfa Romeo</option>
              {/* Add more vehicle marques as needed */}
            </select>
          </div>
        </div>

        {/* Car listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {filteredCars.map((car, index) => (
            <div
              key={car.id_vehicules}
              onClick={() => handleCarClick(car)}
              className="cursor-pointer space-y-3 border-2 border-gray-300 hover:border-yellow-400 p-3 rounded-xl relative group transition-transform duration-300 ease-in-out"
            >
              {/* Car Info */}
              <div className="w-full h-[120px]">
                <img
                  src={car.image_url}
                  alt={car.marque_vehicules}
                  className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-primary font-semibold">{car.marque_vehicules}</h1>
                <p>${car.prix_vehicules}/Day</p>
              </div>

              {/* Drift effect on hover */}
              <div className="absolute inset-0 group-hover:translate-x-2 transition-transform duration-300 ease-in-out"></div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedCar && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg max-w-md w-full h-auto">
              {/* Car Image */}
              <div className="mb-2 flex justify-center">
                <img
                  src={selectedCar.image_url}
                  alt={selectedCar.marque_vehicules}
                  className="max-w-full max-h-40 object-contain"
                />
              </div>
              
              {/* Car Details */}
              <h2 className="text-lg font-semibold mb-2 text-center">
                {selectedCar.marque_vehicules}
              </h2>
              <div className="text-sm mb-2">
                <p><strong>Price:</strong> ${selectedCar.prix_vehicules}/Day</p>
                <p><strong>Model:</strong> {selectedCar.modele_vehicules}</p>
                <p><strong>Brand:</strong> {selectedCar.marque_vehicules}</p>
                <p><strong>Type:</strong> {selectedCar.type_vehicules}</p>
              </div>

              {/* Date Pickers */}
              <div className="my-2">
                <label htmlFor="startDate" className="block mb-1">Start Date:</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  className="border p-2 rounded w-full text-sm"
                />
              </div>

              <div className="my-2">
                <label htmlFor="endDate" className="block mb-1">End Date:</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  className="border p-2 rounded w-full text-sm"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={() => addReservation(selectedCar)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Reserve
                </button>
                <button
                  onClick={closeModal}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarListComp;

