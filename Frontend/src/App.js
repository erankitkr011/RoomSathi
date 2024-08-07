import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Login from './Components/Login/login';
import Signup from './Components/SignUp/signup';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;