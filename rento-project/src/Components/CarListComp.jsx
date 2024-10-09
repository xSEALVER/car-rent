// // import { useState, useEffect } from 'react';

// // const CarList = () => {
// //   const [cars, setCars] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [type, setType] = useState('');
// //   const [marque, setMarque] = useState('');
// //   const [selectedCar, setSelectedCar] = useState(null); // State for selected car
// //   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

// //   useEffect(() => {
// //     const fetchCars = async () => {
// //       try {
// //         let url = `http://localhost:8081/carlist?`; // Base URL
// //         if (type) url += `type=${type}&`;
// //         if (marque) url += `marque=${marque}`;

// //         const response = await fetch(url);
// //         if (!response.ok) {
// //           throw new Error(`HTTP error! status: ${response.status}`);
// //         }
// //         const data = await response.json();
// //         setCars(data);
// //       } catch (err) {
// //         console.error('Fetch error:', err);
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchCars();
// //   }, [type, marque]);

// //   // Function to open the modal and set selected car
// //   const handleCarClick = (car) => {
// //     setSelectedCar(car);
// //     setIsModalOpen(true);
// //   };

// //   // Function to close the modal
// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedCar(null);
// //   };

// //   if (loading) return <div>Loading...</div>;
// //   if (error) return <div>Error: {error}</div>;

// //   return (
// //     <div className="pb-24">
// //       <div className="container mx-8">
// //         {/* Heading */}
// //         <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
// //           Car List
// //         </h1>
// //         <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
// //           Choose the perfect car for your needs!
// //         </p>

// //         {/* Filters */}
// //         <div className="flex justify-between mb-8">
// //           {/* Type Filter */}
// //           <div>
// //             <label htmlFor="type" className="block text-sm font-medium text-gray-700">
// //               Vehicle Type:
// //             </label>
// //             <select
// //               id="type"
// //               className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm rounded-md"
// //               value={type}
// //               onChange={(e) => setType(e.target.value)}
// //             >
// //               <option value="">All Types</option>
// //               <option value="Sedan">Sedan</option>
// //               <option value="SUV">SUV</option>
// //               <option value="Truck">Truck</option>
// //             </select>
// //           </div>

// //           {/* Marque Filter */}
// //           <div>
// //             <label htmlFor="marque" className="block text-sm font-medium text-gray-700">
// //               Brand:
// //             </label>
// //             <select
// //               id="marque"
// //               className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm rounded-md"
// //               value={marque}
// //               onChange={(e) => setMarque(e.target.value)}
// //             >
// //               <option value="">All Brands</option>
// //               <option value="Toyota">Toyota</option>
// //               <option value="Honda">Honda</option>
// //               <option value="Ford">Ford</option>
// //             </select>
// //           </div>
// //         </div>

// //         {/* Car listing */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
// //           {cars.map((car, index) => (
// //             <div
// //               key={car.id_vehicules}
// //               onClick={() => handleCarClick(car)} // Add click handler to open modal
// //               data-aos="fade-up"
// //               data-aos-delay={index * 100}
// //               className="cursor-pointer space-y-3 border-2 border-gray-300 hover:border-yellow-400 p-3 rounded-xl relative group"
// //             >
// //               <div className="w-full h-[120px]">
// //                 <img
// //                   src={car.image_url}
// //                   alt={car.marque_vehicules}
// //                   className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
// //                 />
// //               </div>
// //               <div className="space-y-2">
// //                 <h1 className="text-primary font-semibold">{car.marque_vehicules}</h1>
// //                 <div className="flex justify-between items-center text-xl font-semibold">
// //                   <p>${car.prix_vehicules}/Day</p>
// //                   <a href="#">Details</a>
// //                 </div>
// //               </div>
// //               <p className="text-xl font-semibold absolute top-0 left-3">
// //                 {car.type_vehicules}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //         {/* End of car listing */}

// //         <div className="grid place-items-center mt-8">
// //           <button
// //             data-aos="fade-up"
// //             className="border-yellow-400 border-2 rounded px-6 py-2 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:transition"
// //           >
// //             Get Started
// //           </button>
// //         </div>

// //         {/* Modal */}
// //         {isModalOpen && selectedCar && (
// //           <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
// //             <div className="bg-white p-6 rounded-lg max-w-lg w-full">
// //               <h2 className="text-2xl font-semibold mb-4">{selectedCar.marque_vehicules} - {selectedCar.type_vehicules}</h2>
// //               <div className="flex flex-col space-y-4">
// //                 <img src={selectedCar.image_url} alt={selectedCar.marque_vehicules} className="w-full h-auto object-contain" />
// //                 <p><strong>Brand:</strong> {selectedCar.marque_vehicules}</p>
// //                 <p><strong>Model:</strong> {selectedCar.modele_vehicules}</p>
// //                 <p><strong>Price:</strong> ${selectedCar.prix_vehicules}/Day</p>
// //               </div>
// //               <button
// //                 onClick={closeModal}
// //                 className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500"
// //               >
// //                 Close
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// import { useState, useEffect } from 'react';

// const CarList = () => {
//   const [cars, setCars] = useState([]);
//   const [filteredCars, setFilteredCars] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Filters
//   const [filterType, setFilterType] = useState('');
//   const [filterMarque, setFilterMarque] = useState('');

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await fetch('http://localhost:8081/carlist');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setCars(data);
//         setFilteredCars(data); // Set filtered cars initially to all cars
//       } catch (err) {
//         console.error('Fetch error:', err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   // Filter logic
//   const handleFilterChange = () => {
//     let filtered = cars;

//     if (filterType) {
//       filtered = filtered.filter((car) => car.type_vehicules === filterType);
//     }
//     if (filterMarque) {
//       filtered = filtered.filter((car) => car.marque_vehicules === filterMarque);
//     }

//     setFilteredCars(filtered);
//   };

//   // Open Modal with car details
//   const handleCarClick = (car) => {
//     setSelectedCar(car);
//     setIsModalOpen(true);
//   };

//   // Close Modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedCar(null);
//   };

//   // Function to add reservation
//   const addReservation = async (car) => {
//     try {
//       const response = await fetch('http://localhost:8081/addReservation', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(car),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to add reservation');
//       }

//       alert('Reservation added successfully!');
//       closeModal(); // Close modal after successful reservation
//     } catch (err) {
//       console.error(err);
//       alert('Failed to add reservation.');
//     }
//   };

//   // Handle filters when they change
//   useEffect(() => {
//     handleFilterChange();
//   }, [filterType, filterMarque]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="pb-24">
//       <div className="container mx-8">
//         {/* Heading */}
//         <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
//           Car List
//         </h1>
//         <p className="text-sm pb-10">
//           Choose the perfect car for your needs!
//         </p>

//         {/* Filters */}
//         <div className="grid grid-cols-2 gap-4 mb-10">
//           <div>
//             <label>Filter by Type:</label>
//             <select
//               value={filterType}
//               onChange={(e) => setFilterType(e.target.value)}
//               className="border p-2 rounded w-full"
//             >
//               <option value="">All Types</option>
//               <option value="SUV">SUV</option>
//               <option value="Sedan">Sedan</option>
//               <option value="Truck">Truck</option>
//               {/* Add more vehicle types as needed */}
//             </select>
//           </div>
//           <div>
//             <label>Filter by Marque:</label>
//             <select
//               value={filterMarque}
//               onChange={(e) => setFilterMarque(e.target.value)}
//               className="border p-2 rounded w-full"
//             >
//               <option value="">All Marques</option>
//               <option value="Toyota">Toyota</option>
//               <option value="BMW">BMW</option>
//               <option value="Ford">Ford</option>
//               {/* Add more vehicle marques as needed */}
//             </select>
//           </div>
//         </div>

//         {/* Car listing */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
//           {filteredCars.map((car, index) => (
//             <div
//               key={car.id_vehicules}
//               onClick={() => handleCarClick(car)}
//               className="cursor-pointer space-y-3 border-2 border-gray-300 hover:border-yellow-400 p-3 rounded-xl relative group"
//             >
//               {/* Car Info */}
//               <div className="w-full h-[120px]">
//                 <img
//                   src={car.image_url}
//                   alt={car.marque_vehicules}
//                   className="w-full h-[120px] object-contain"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <h1 className="text-primary font-semibold">{car.marque_vehicules}</h1>
//                 <p>${car.prix_vehicules}/Day</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Modal */}
//         {isModalOpen && selectedCar && (
//   <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//     <div className="bg-white p-6 rounded-lg max-w-lg w-full">
//       {/* Car Image */}
//       <div className="w-full h-[200px] mb-4">
//         <img
//           src={selectedCar.image_url}
//           alt={selectedCar.marque_vehicules}
//           className="w-full h-full object-contain"
//         />
//       </div>
      
//       {/* Car Details */}
//       <h2 className="text-2xl font-semibold mb-4">{selectedCar.marque_vehicules}</h2>
//       <p><strong>Price:</strong> ${selectedCar.prix_vehicules}/Day</p>
//       <p><strong>Model:</strong> {selectedCar.modele_vehicules}</p>
//       <p><strong>Brand:</strong> {selectedCar.marque_vehicules}</p>
//       <p><strong>Type:</strong> {selectedCar.type_vehicules}</p>

//       {/* Reserve Button */}
//       <button
//         onClick={() => addReservation(selectedCar)}
//         className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500"
//       >
//         Reserve
//       </button>

//       {/* Close Button */}
//       <button
//         onClick={closeModal}
//         className="mt-4 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//       >
//         Close
//       </button>
//     </div>
//   </div>
// )}

//       </div>
//     </div>
//   );
// };

// export default CarList;

// import { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const CarList = () => {
//   const [cars, setCars] = useState([]);
//   const [filteredCars, setFilteredCars] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Filters
//   const [filterType, setFilterType] = useState('');
//   const [filterMarque, setFilterMarque] = useState('');

//   // Date pickers for reservation
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await fetch('http://localhost:8081/carlist');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setCars(data);
//         setFilteredCars(data); // Set filtered cars initially to all cars
//       } catch (err) {
//         console.error('Fetch error:', err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   // Filter logic
//   const handleFilterChange = () => {
//     let filtered = cars;

//     if (filterType) {
//       filtered = filtered.filter((car) => car.type_vehicules === filterType);
//     }
//     if (filterMarque) {
//       filtered = filtered.filter((car) => car.marque_vehicules === filterMarque);
//     }

//     setFilteredCars(filtered);
//   };

//   // Open Modal with car details
//   const handleCarClick = (car) => {
//     setSelectedCar(car);
//     setIsModalOpen(true);
//   };

//   // Close Modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedCar(null);
//     setStartDate(new Date());
//     setEndDate(new Date());
//   };

//   // Function to add reservation with date values
//   const addReservation = async () => {
//     const reservationData = {
//       id_vehicules: selectedCar.id_vehicules,
//       id_agence: car.id_agence, // Make sure this is defined and correct
//       date_reservation: startDate,
//       date_fin_reservation: endDate,
//     };

//     try {
//       const response = await fetch('http://localhost:8081/addReservation', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(reservationData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to add reservation');
//       }

//       alert('Reservation added successfully!');
//       closeModal();
//     } catch (err) {
//       console.error(err);
//       alert('Failed to add reservation.');
//     }
//   };

//   // Handle filters when they change
//   useEffect(() => {
//     handleFilterChange();
//   }, [filterType, filterMarque]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="pb-24">
//       <div className="container mx-8">
//         {/* Heading */}
//         <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
//           Car List
//         </h1>
//         <p className="text-sm pb-10">
//           Choose the perfect car for your needs!
//         </p>

//         {/* Filters */}
//         <div className="grid grid-cols-2 gap-4 mb-10">
//           <div>
//             <label>Filter by Type:</label>
//             <select
//               value={filterType}
//               onChange={(e) => setFilterType(e.target.value)}
//               className="border p-2 rounded w-full"
//             >
//               <option value="">All Types</option>
//               <option value="SUV">SUV</option>
//               <option value="Sedan">Sedan</option>
//               <option value="Truck">Truck</option>
//               {/* Add more vehicle types as needed */}
//             </select>
//           </div>
//           <div>
//             <label>Filter by Marque:</label>
//             <select
//               value={filterMarque}
//               onChange={(e) => setFilterMarque(e.target.value)}
//               className="border p-2 rounded w-full"
//             >
//               <option value="">All Marques</option>
//               <option value="Toyota">Toyota</option>
//               <option value="BMW">BMW</option>
//               <option value="Ford">Ford</option>
//               {/* Add more vehicle marques as needed */}
//             </select>
//           </div>
//         </div>

//         {/* Car listing */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
//           {filteredCars.map((car, index) => (
//             <div
//               key={car.id_vehicules}
//               onClick={() => handleCarClick(car)}
//               className="cursor-pointer space-y-3 border-2 border-gray-300 hover:border-yellow-400 p-3 rounded-xl relative group"
//             >
//               {/* Car Info */}
//               <div className="w-full h-[120px]">
//                 <img
//                   src={car.image_url}
//                   alt={car.marque_vehicules}
//                   className="w-full h-[120px] object-contain"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <h1 className="text-primary font-semibold">{car.marque_vehicules}</h1>
//                 <p>${car.prix_vehicules}/Day</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Modal */}
//         {isModalOpen && selectedCar && (
//           <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//             <div className="bg-white p-6 rounded-lg max-w-lg w-full">
//               {/* Car Image */}
//               <div className="w-full h-[200px] mb-4">
//                 <img
//                   src={selectedCar.image_url}
//                   alt={selectedCar.marque_vehicules}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
              
//               {/* Car Details */}
//               <h2 className="text-2xl font-semibold mb-4">{selectedCar.marque_vehicules}</h2>
//               <p><strong>Price:</strong> ${selectedCar.prix_vehicules}/Day</p>
//               <p><strong>Model:</strong> {selectedCar.modele_vehicules}</p>
//               <p><strong>Brand:</strong> {selectedCar.marque_vehicules}</p>
//               <p><strong>Type:</strong> {selectedCar.type_vehicules}</p>

//               {/* Date pickers for reservation */}
//               <div className="my-4">
//                 <label className="block font-semibold mb-2">Start Date and Time:</label>
//                 <DatePicker
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   showTimeSelect
//                   dateFormat="Pp"
//                   className="border p-2 rounded w-full"
//                 />
//               </div>

//               <div className="my-4">
//                 <label className="block font-semibold mb-2">End Date and Time:</label>
//                 <DatePicker
//                   selected={endDate}
//                   onChange={(date) => setEndDate(date)}
//                   showTimeSelect
//                   dateFormat="Pp"
//                   className="border p-2 rounded w-full"
//                 />
//               </div>

//               {/* Reserve Button */}
//               <button
//                 onClick={addReservation}
//                 className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500"
//               >
//                 Reserve
//               </button>

//               {/* Close Button */}
//               <button
//                 onClick={closeModal}
//                 className="mt-4 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CarList;

import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CarListComp = () => {
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

  // Function to add reservation
  const addReservation = async (car) => {
    if (!startDate || !endDate) {
      alert('Please select a start and end date for the reservation.');
      return;
    }

    const reservationData = {
      id_vehicules: car.id_vehicules,
      id_agence: car.id_agence, // Ensure the car data has `id_agence`
      date_reservation: startDate,
      date_fin_reservation: endDate,
    };

    try {
      const response = await fetch('http://localhost:8081/addReservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData), // Sending the reservation data
      });

      if (!response.ok) {
        throw new Error('Failed to add reservation');
      }

      alert('Reservation added successfully!');
      closeModal(); // Close modal after successful reservation
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
    <div className="pb-24">
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
    <div className="bg-white p-4 rounded-lg max-w-md w-full h-auto"> {/* Rectangular modal with smaller height */}
      
      {/* Car Image */}
      <div className="mb-2 flex justify-center">
        <img
          src={selectedCar.image_url}
          alt={selectedCar.marque_vehicules}
          className="max-w-full max-h-40 object-contain" // Reduced image height for a compact layout
        />
      </div>
      
      {/* Car Details */}
      <h2 className="text-lg font-semibold mb-2 text-center">{selectedCar.marque_vehicules}</h2> {/* Smaller title */}
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

      {/* Reserve Button */}
      <button
        onClick={() => addReservation(selectedCar)}
        className="mt-3 bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 w-full text-sm"
      >
        Reserve
      </button>

      {/* Close Button */}
      <button
        onClick={closeModal}
        className="mt-2 bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 w-full text-sm"
      >
        Close
      </button>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default CarListComp;
