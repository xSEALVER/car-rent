import React, { createContext, useContext, useState } from 'react';

// Create the UserContext
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState(null); // State to hold the user's email

    return (
        <UserContext.Provider value={{ userEmail, setUserEmail }}>
            {children}
        </UserContext.Provider>
    );
};

// Create a custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
