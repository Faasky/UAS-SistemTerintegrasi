import React from "react";
import { useNavigate } from "react-router-dom";


export default function MyBooking() {
    const navigate = useNavigate();

    // Retrieve booking details from localStorage
    const bookingDetails = JSON.parse(localStorage.getItem("lastBooking"));

    if (!bookingDetails) {
        return <p>No booking details available.</p>;
    }

    const { seat, theater, date, time, movie } = bookingDetails;

    return (
        <div className="my-booking">
            <h2>Your Booking Details</h2>

            {/* Movie Details */}
            {movie && (
                <div className="movie-details">
                    <h3>Movie Information</h3>
                    <img src={movie.i.imageUrl} alt={movie.l} className="movie-image" />
                    <p><strong>Title:</strong> {movie.l}</p>
                    <p><strong>Platform:</strong> {movie.q || "Unknown"}</p>
                    <p><strong>Release Year:</strong> {movie.y || "Unknown"}</p>
                    <p><strong>Cast:</strong> {movie.s || "Not available"}</p>
                </div>
            )}

            {/* Booking Information */}
            <div className="booking-info">
                <p><strong>Seat:</strong> {seat}</p>
                <p><strong>Theater Type:</strong> {theater}</p>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Time:</strong> {time}</p>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
                <button className="okay-button" onClick={() => alert("Thank you for reviewing your booking!")}>
                    Okay
                </button>
                <button className="return-button" onClick={() => navigate("/")}>
                    Homepage
                </button>
            </div>
        </div>
    );
}
