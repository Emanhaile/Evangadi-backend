import React, { createContext, useState } from "react";

// Create the UserContext
export const UserContext = createContext();

// Define the UserProvider to wrap the app and provide user data
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    username: "Guest", // Default user data (you can modify this)
  });

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {children}
    </UserContext.Provider>
  );
};
