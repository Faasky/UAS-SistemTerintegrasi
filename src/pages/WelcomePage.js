import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/image1.png"; 

export default function WelcomePage() {
    const navigate = useNavigate();

    const navigateToLandingPage = () => {
        navigate("/landing");
    };

    const navigateToInfoPage = () => {
        navigate("/info");
    };

    return (
        <div className="welcome-page">
            <img src={logo} alt="App Logo" className="welcome-logo" />
            <h1>Welcome to Movie Booking App</h1>
            <p>Discover the latest movies and book your tickets in just a few clicks!</p>
            <button onClick={navigateToLandingPage} className="enter-button">
                Enter
            </button>
            <button onClick={navigateToInfoPage} className="info-button">
                Learn More
            </button>
        </div>
    );
}
