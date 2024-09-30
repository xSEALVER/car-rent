import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';  // Import CartProvider
import Home from './Pages/Home';
import "aos/dist/aos.css";
import AOS from "aos";
import React from 'react';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';



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

        <Router>
            
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/signin' element={<SignIn/>} />
              <Route path='/contact' element={<Contact/>} />
            </Routes>

        </Router>

    </CartProvider>

  );
}

export default App
