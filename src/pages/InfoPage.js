import React from "react";
import { useNavigate } from "react-router-dom";

export default function InfoPage() {
    const navigate = useNavigate();

    const navigateToWelcomePage = () => {
        navigate("/");
    };

    return (
        <div className="info-page">
            <h1>About Movie Booking App</h1>
            <p>
                The Movie Booking App allows users to explore the latest movies, view detailed information, and book tickets conveniently. 
                Built with React, it offers a seamless user experience with interactive components and smooth navigation.
            </p>
            <ul>
                <li>Browse the latest and popular movies</li>
                <li>Get detailed information about each movie</li>
                <li>Book tickets for your favorite movies with ease</li>
            </ul>
            <p>
                This app leverages modern web technologies to provide a fast and reliable booking experience. 
                We hope you enjoy using the app and watching your favorite movies!
            </p>

            {/* About Developer Section */}
            <div className="developer-section">
                <h2>About the Developer</h2>
                <div className="developer-profile">
                    <img
                        src="https://avatars.githubusercontent.com/u/129671112?v=4" // Ganti dengan URL foto Anda
                        alt="Developer Profile"
                        className="developer-photo"
                    />
                    <div className="developer-details">
                        <h3>Faasky</h3>
                        <p>
                            Faasky is a passionate web developer specializing in building modern and interactive web applications. 
                            With a focus on user experience and performance, they strive to create impactful digital solutions.
                        </p>
                        <button
                            onClick={() => window.open("https://github.com/faasky", "_blank")} // Ganti dengan URL GitHub Anda
                            className="github-button"
                        >
                            Visit GitHub Profile
                        </button>
                    </div>
                </div>
            </div>

            <button onClick={navigateToWelcomePage} className="back-button">
                Back to Welcome Page
            </button>
        </div>
    );
}
