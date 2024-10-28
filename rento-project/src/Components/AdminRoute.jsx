import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => {
    const role = localStorage.getItem('role'); // Get role from localStorage

    return (
        <Route
            {...rest}
            element={
                role === 'admin' ? (
                    <Component {...rest} />
                ) : (
                    <Navigate to="/not-authorized" replace />
                )
            }
        />
    );
};

export default AdminRoute;
