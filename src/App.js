// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import WelcomePage from "./pages/WelcomePage";
import LandingPage from "./pages/LandingPage";
import BookingPage from "./pages/BookingPage";
import MyBooking from "./pages/MyBooking"; // Import MyBooking
import InfoPage from "./pages/InfoPage";
import Top from "./pages/Top";

// Components
import Header from "./components/header";
import Navbar from "./components/navbar"; // Import Navbar

import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Navbar /> {/* Add Navbar here */}
                
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/landing" element={<LandingPage />} />
                    <Route path="/booking" element={<BookingPage />} />
                    <Route path="/mybooking" element={<MyBooking />} />
                    <Route path="/info" element={<InfoPage />} />
                    <Route path="/top" element={<Top />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
