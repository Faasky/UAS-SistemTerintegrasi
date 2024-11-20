import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"; 

export default function Modal({ isShow, data, onCancel }) {
    const navigate = useNavigate();

    if (!isShow || !data) return null;

    const handleBookNow = () => {
        navigate("/booking", { state: { movie: data } });
    };

    return (
        <div className="modal-wrapper">
            <div className="modal-bg" onClick={onCancel}></div>
            <div className="modal">
                <button className="modal-close" onClick={onCancel}>
                    <span>&times;</span>
                </button>
                <div className="modal-content">
                    <figure className="modal-image">
                        <img src={data.i.imageUrl} alt={data.l} />
                    </figure>
                    <h3 className="modal-title">Movie Information</h3>
                    <div className="modal-info">
                        <p><strong>Judul:</strong> {data.l}</p>
                        <p><strong>Platform:</strong> {data.q || "Unknown"}</p>
                        <p><strong>Tahun Rilis:</strong> {data.y || "Unknown"}</p>
                        <p><strong>Pemeran:</strong> {data.s || "Not available"}</p>
                    </div>
                    <div className="modal-buttons">
                        <button className="modal-close-btn" onClick={onCancel}>Close</button>
                        <button className="modal-book-btn" onClick={handleBookNow}>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
