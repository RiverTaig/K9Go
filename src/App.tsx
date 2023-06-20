import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Schedule from './components/Schedule';
import OurDogs from './components/OurDogs';
import Rates from './components/Rates';
import Contact from './components/Contact';
import Home from './components/Home';
import ServiceArea from './components/ServiceArea';
import Login from './components/Login';
import Cancellation from './components/Cancellation';
import Insurance from './components/Insurance';
import UserProvider from "./context/UserContext"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <UserProvider>
      <div className='app'>
        <Router>
          <Header />
          <div className='mainContent'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/ourDogs" element={<OurDogs />} />
              <Route path="/rates" element={<Rates />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/serviceArea" element={<ServiceArea />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cancellation" element={<Cancellation />} />
              <Route path="/insurance" element={<Insurance />} />
            </Routes>
          </div>
        </Router>
      </div >
    </UserProvider>
  );
}

export default App;
