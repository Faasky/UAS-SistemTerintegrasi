import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/card";
import Modal from "../components/modal";

export default function LandingPage() {
    const [data, setData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("Aquaman");
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);

    const navigate = useNavigate(); // For navigation to Coming Soon page

    useEffect(() => {
        const fetchData = async (query) => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    "https://imdb8.p.rapidapi.com/auto-complete kdnfkjdefb", 
                    {
                        params: { q: query },
                        headers: {
                            "x-rapidapi-host": "imdb8.p.rapidapi.com",
                            "x-rapidapi-key": "d68a57ee81mshaca6cb518d8b678p1f0dfbjsnbbbaab6e122a cobaja", 
                        },
                    }
                );
                if (response.status === 200) {
                    setData(response.data);
                    setIsLoaded(true);
                    setIsLoading(false);
                    // Save the last search data to localStorage
                    localStorage.setItem("lastSearchData", JSON.stringify(response.data));
                }
            } catch (err) {
                console.log(err);
                setIsLoading(false);
                // Try to load data from localStorage if available (offline mode)
                const cachedData = localStorage.getItem("lastSearchData");
                if (cachedData) {
                    setData(JSON.parse(cachedData));
                    setIsLoaded(true);
                }
            }
        };

        if (!isLoaded) {
            fetchData(query);
        }
    }, [isLoaded, query]);

    const onSearch = (e) => {
        if (e.key === "Enter") {
            setIsLoaded(false);
            setQuery(e.target.value);
        }
    };

    const handleClick = (item) => {
        setModalShow(!modalShow);
        setModalItem(item);
    };

    const goToRating = () => {
        navigate("/top");
    };

    return (
        <main>
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Search film by name"
                    onKeyDown={(e) => onSearch(e)}
                    className="search-bar"
                />
                <button onClick={goToRating} className="rating-button">
                    View Rating Movies
                </button>
            </div>
            <h3 className="title">Search : {query}</h3>
            {!data || isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="card-container">
                    {data.d.map((item, index) => (
                        <Card data={item} key={index} onClick={() => handleClick(item)} />
                    ))}
                </div>
            )}
            <Modal
                data={modalItem}
                isShow={modalShow}
                onCancel={() => setModalShow(false)}
            />
        </main>
    );
    
}
