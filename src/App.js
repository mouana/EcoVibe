import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"; // Replaced BrowserRouter with HashRouter
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import Home from "./view/Platform/Home";
import Simulateur from "./view/Platform/Simulateur";
import Signup from "./view/Platform/Signup";
import Inscrire from "./view/Platform/Inscription";
import Expert from "./view/Platform/Expert";
import ProjectCard from "./view/Platform/ProjctCard";
import Service from "./view/Platform/Service";
import Apprendre from "./view/Platform/Apprendre";
import ProfileContainer from "./view/Platform/Profile";
import EnergyDashboard from "./Components/Platform/profile/Dashboard";
import Admin from "./view/Admin/Admin";
import ExpertsList from './Components/Admin/ExpertsList';
// import ProjectsList from './Components/Admin/ProjectsList.jsx'
// import UserList from './Components/Admin/UserList.jsx'
import ExpertDetails from './Components/Admin/ExpertDetails.jsx';
import Login from './view/Admin/Login.jsx';
import ProjectDetails from './Components/Admin/ProjetDetails.jsx';
import AddUser from './Components/Admin/AddUser.jsx';
import Devis from './Components/Platform/Simulateur/Devis.jsx';
import ExpertProfile from './Components/Admin/ExpertProfile.jsx';

// Mock authentication check (replace with your actual logic)
const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null; 
};

// Protected Route Wrapper
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/signup" />;
};

function App() {
  return (
    <AuthProvider>
      {/* Wrap the app in AuthProvider */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulateur" element={<Simulateur />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/inscription" element={<Inscrire />} />
          <Route path="/expert" element={<Expert />} />
          <Route path="/cartes" element={<ProjectCard />} />
          <Route path="/service" element={<Service />} />
          <Route path="/apprendre" element={<Apprendre />} />
          <Route path="/energy-dashboard" element={<ProtectedRoute element={<EnergyDashboard />} />} />
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/devis" element={<Devis />} />
          {/* Admin Routes */}
          <Route path="/admin" element={<Login />} />
          <Route path="/Dashboard" element={<Admin />} />
          <Route path="/expertsList" element={<ExpertsList />} />
          <Route path="/experts/:expertId" element={<ExpertDetails />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/expertProfile" element={<ExpertProfile />} />
          {/* <Route path="/projectsList" element={<ProjectsList />} />
          <Route path="/userList" element={<UserList />} /> */}
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
