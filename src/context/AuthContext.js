import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
  });

  // Initialize auth state on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token) {
      try {
        const parsedUser = user ? JSON.parse(user) : null;
        setIsLoggedIn(true); // Update isLoggedIn state
        setAuthState({
          token,
          user: parsedUser,
        });
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        setIsLoggedIn(false);
        setAuthState({ token: null, user: null });
      }
    } else {
      setIsLoggedIn(false); // Set to false if no token is found
      setAuthState({ token: null, user: null });
    }
  }, []);

  // Function to handle login
  const login = (token, user) => {
    try {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setIsLoggedIn(true);
      setAuthState({
        token,
        user,
      });
    } catch (error) {
      console.error("Error saving auth data to localStorage:", error);
    }
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setAuthState({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthState, login, logout, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
