import React from 'react';

const NotAuthorized = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold">Not Authorized</h1>
            <p>You do not have permission to view this page.</p>
        </div>
    );
};

export default NotAuthorized;
