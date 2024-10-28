import React from 'react';
import NavbarAdmin from '../Components/NavbarAdmin';
import AdminDashboard from '../Components/AdminDashboard';
import Footer from '../Components/Footer';

function AdminPage() {
  return (
    <>
        <NavbarAdmin/>
        <AdminDashboard/>
        <Footer/>
    </>
  )
}

export default AdminPage