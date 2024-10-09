import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';  // Import CartProvider
import { UserProvider } from './context/UserContext'; // Adjust the path based on where you saved UserContext.js
import Home from './Pages/Home';
import "aos/dist/aos.css";
import AOS from "aos";
import React from 'react';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import CarList from './Components/CarListComp';
import MesReservations from './Components/ReservationsComp';
import Reservation from './Pages/Reservation';
import Vehicules from './Pages/Vehicules';

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
   
    <CartProvider>  {/* Wrap the app in CartProvider */}
        <UserProvider>

        <Router>
            
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/signin' element={<SignIn/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/carlist' element={<CarList/>} />
              <Route path='/Reservation' element={<Reservation/>} />
              <Route path='/reservation' element={<MesReservations/>} />
              <Route path='/vehicules' element={<Vehicules/>} />
            </Routes>

        </Router>

        </UserProvider>

    </CartProvider>

  );
}

export default App
