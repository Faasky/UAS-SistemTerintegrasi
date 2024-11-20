import React from "react";
import "./Modal.css"

export default function MovieDetailModal({ data, isShow, onCancel }) {
    if (!isShow || !data) return null; // Don't render modal if it's not shown

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onCancel}>X</button>
                <div className="modal-body">
                    <h2 className="modal-title">{data.title}</h2>
                    <img src={data.big_image} alt={data.title} className="modal-img" />
                    <p className="modal-description">{data.description}</p>
                    <p className="modal-rating">Rating: {data.rating}</p>
                    <p className="modal-year">Year: {data.year}</p>
                    <a href={data.imdb_link} target="_blank" rel="noopener noreferrer" className="modal-imdb-link">
                        View on IMDb
                    </a>
                </div>
            </div>
        </div>
    );
}
