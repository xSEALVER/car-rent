import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';  // Import CartProvider
import { UserProvider } from './context/UserContext'; // Adjust the path based on where you saved UserContext.js
import Home from './Pages/Home';
import "aos/dist/aos.css";
import './Global.css';
import AOS from "aos";
import React from 'react';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import CarListComp from './Components/CarListComp';
import MesReservations from './Components/ReservationsComp';
import Reservation from './Pages/Reservation';
import Vehicules from './Pages/Vehicules';
import TestComponents from './Components/TestComponents';
import Testsignup from './Components/testsignup';
import ImgLoader from './Components/ImgLoader';
import AdminRoutePage from './Components/AdminRoute';
import NotAuthorized from './Components/NotAuthorized';
import AdminDashboard from './Components/AdminDashboard';
import AdminPage from './Pages/AdminPage';
import UpdateReservation from './Components/UpdateReservation';
import CreateReservation from './Components/CreateReservation';

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
              <Route path='/carlist' element={<CarListComp/>} />
              <Route path='/Reservation' element={<Reservation/>} />
              <Route path='/reservation' element={<MesReservations/>} />
              <Route path='/vehicules' element={<Vehicules/>} />
              <Route path='/testcomp' element={<TestComponents/>} />
              <Route path='/testsignup' element={<Testsignup/>} />
              <Route path='/loader' element={<ImgLoader/>} />
              <Route path='/admin' element={<AdminRoutePage/>} />
              <Route path='/not-auth' element={<NotAuthorized/>} />

              <Route path='/admin-dashboard' element={<AdminDashboard/>} />
              <Route path='/admin-page' element={<AdminPage/>} />
              <Route path='/create' element={<CreateReservation />} />
              <Route path='/update/:id' element={<UpdateReservation />} />

            </Routes>

        </Router>

        </UserProvider>

    </CartProvider>

  );
}

export default App
