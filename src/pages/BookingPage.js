import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';


export default function BookingPage() {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Extract movie data from location state
    const { movie } = location.state || {}; // Handles case when no movie is passed

    const [selectedSeat, setSelectedSeat] = useState(null);
    const [theaterType, setTheaterType] = useState("XXI");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    const seats = Array.from({ length: 24 }, (_, index) => index + 1);
    const times = ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"];
    const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long"
        });
    });

    const handleSeatSelection = (seat) => setSelectedSeat(seat);
    const handleTheaterTypeChange = (event) => setTheaterType(event.target.value);
    const handleDateChange = (event) => setSelectedDate(event.target.value);
    const handleTimeChange = (event) => setSelectedTime(event.target.value);

    const handleBookingConfirm = () => {
        const bookingDetails = {
            seat: selectedSeat,
            theater: theaterType,
            date: selectedDate,
            time: selectedTime,
            movie: movie // Include movie details
        };

        // Save booking details to localStorage
        localStorage.setItem("lastBooking", JSON.stringify(bookingDetails));
        alert("Booking confirmed!");

        // Navigate to MyBooking page
        navigate("/mybooking");
    };

    return (
        <div className="booking-page">
            {movie && (
                <>
                    <h2>Book Your Movie: {movie.l}</h2>
                    <img src={movie.i.imageUrl} alt={movie.l} style={{ width: "200px", height: "auto" }} />
                    <p>{movie.s || "No description available."}</p> {/* Assuming description is stored in movie.s */}
                </>
            )}

            <div className="booking-section">
                <h3>Select Seat:</h3>
                <div className="seat-container">
                    {seats.map((seat) => (
                        <button
                            key={seat}
                            className={`seat ${selectedSeat === seat ? "selected" : ""}`}
                            onClick={() => handleSeatSelection(seat)}
                        >
                            {seat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="booking-section">
                <h3>Select Theater Type:</h3>
                <div className="theater-type">
                    <label>
                        <input
                            type="radio"
                            value="XXI"
                            checked={theaterType === "XXI"}
                            onChange={handleTheaterTypeChange}
                        />
                        XXI
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="IMAX"
                            checked={theaterType === "IMAX"}
                            onChange={handleTheaterTypeChange}
                        />
                        IMAX
                    </label>
                </div>
            </div>

            <div className="booking-section">
                <h3>Select Day & Date:</h3>
                <select value={selectedDate} onChange={handleDateChange}>
                    <option value="">Choose a date</option>
                    {daysOfWeek.map((day, index) => (
                        <option key={index} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
            </div>

            <div className="booking-section">
                <h3>Select Time:</h3>
                <select value={selectedTime} onChange={handleTimeChange}>
                    <option value="">Choose a time</option>
                    {times.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </div>

            <div className="preview-section">
                <h3>Your Selection:</h3>
                <p><strong>Seat:</strong> {selectedSeat || "None"}</p>
                <p><strong>Theater Type:</strong> {theaterType}</p>
                <p><strong>Date:</strong> {selectedDate || "None"}</p>
                <p><strong>Time:</strong> {selectedTime || "None"}</p>
            </div>

            <button
                className="confirm-button"
                onClick={handleBookingConfirm}
                disabled={!selectedSeat || !selectedDate || !selectedTime}
            >
                Confirm Booking
            </button>
        </div>
    );
}
