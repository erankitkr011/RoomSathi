import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Login from './Components/Login/login';
import Signup from './Components/SignUp/signup';
import Homepage from './Pages/Homepage';
// import Logout from './Components/Logout/Logout';
import OwnerDashboard from './Components/ownerDashboard/ownerDashboard';
import UserDashboard from './Components/userDashboard/userDashboard';

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
      </Routes>
    </div>
  );
}

export default App;