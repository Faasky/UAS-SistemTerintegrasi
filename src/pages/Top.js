import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard/MovieCard";  // MovieCard component
import MovieDetailModal from "../components/MovieDetailModal/MovieDetailModal"; // MovieDetailModal component

export default function Top() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modalShow, setModalShow] = useState(false);  // Controls the modal visibility
    const [modalItem, setModalItem] = useState(null);  // Holds the movie clicked for modal

    useEffect(() => {
        const fetchTopMovies = async () => {
            const options = {
                method: 'GET',
                url: 'https://imdb-top-100-movies.p.rapidapi.com/',
                headers: {
                    'x-rapidapi-key': 'd68a57ee81mshaca6cb518d8b678p1f0dfbjsnbbbaab6e122a j',
                    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setMovies(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching top movies: ", error);
                setIsLoading(false);
            }
        };

        fetchTopMovies();
    }, []);

    const handleClick = (movie) => {
        setModalItem(movie);  // Set the movie clicked to be shown in modal
        setModalShow(true);    // Show the modal
    };

    const handleCloseModal = () => {
        setModalShow(false);  // Close modal when clicking on the close button
    };

    return (
        <main>
            <h3 className="title">Top 100 Movies</h3>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="card-container">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            data={movie}
                            onClick={() => handleClick(movie)}  // Show modal on card click
                        />
                    ))}
                </div>
            )}

            {/* Conditionally render the MovieDetailModal when a card is clicked */}
            {modalShow && modalItem && (
                <MovieDetailModal
                    data={modalItem}         // Pass the selected movie details to modal
                    isShow={modalShow}       // Check if modal is shown
                    onCancel={handleCloseModal}  // Close modal when clicking on cancel
                />
            )}
        </main>
    );
}
