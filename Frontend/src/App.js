import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Login from './Components/Login/login';
import Signup from './Components/SignUp/signup';
import Homepage from './Pages/Homepage';
// import Logout from './Components/Logout/Logout';
import OwnerDashboard from './Components/ownerDashboard/OwnerDashboard';
import UserDashboard from './Components/userDashboard/userDashboard';
import AddHome from './Components/ownerDashboard/AddHome/AddHome';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        {/* <Route path='/logout' element={<Logout/>} /> */}
        <Route path="/owner-dashboard" element={<OwnerDashboard/>} />
        <Route path='/user-dashboard' element={<UserDashboard/>} />
        <Route path='/add-home' element={<AddHome/>} />
      </Routes>
    </div>
  );
}

export default App;