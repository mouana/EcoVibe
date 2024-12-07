import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import Home from "./view/Home";
import Simulateur from "./view/Simulateur";
import Signup from "./view/Signup";
import Inscrire from "./view/Inscription";
import Expert from "./view/Expert";
import ProjectCard from "./view/ProjctCard";
import Service from "./view/Service";
import Apprendre from "./view/Apprendre";
import ProfileContainer from "./view/Profile"
import EnergyDashboard from "./Components/profile/Dashboard";


// Mock authentication check (replace with your actual logic)
const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null; // Example logic
};

// Protected Route Wrapper
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/signup" />;
};

function App() {
  return (
    <AuthProvider> {/* Wrap the app in AuthProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulateur" element={<Simulateur />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/inscription" element={<Inscrire />} />
          <Route path="/expert" element={<Expert />} />
          <Route path="/cartes" element={<ProjectCard />} />
          <Route path="/service" element={<Service />} />
          <Route path="/apprendre" element={<Apprendre />} />
          <Route
            path="/energy-dashboard"
            element={<ProtectedRoute element={<EnergyDashboard />} />}
          />
          <Route path="/profile"
            element={<ProtectedRoute element={<ProfileContainer />} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
