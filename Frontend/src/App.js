import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Login from "./Components/Login/login";
import Signup from "./Components/SignUp/signup";
import Homepage from "./Pages/Homepage";
import OwnerDashboard from "./Components/adminDashboard/ownerDashboard";
import RenterDashboard from "./Components/userDashboard/renterDashboard";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        <Route path="/renter-dashboard" element={<RenterDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
