import React from "react";
import "./MovieCard.css"

export default function MovieCard({ data, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <img src={data.thumbnail} alt={data.title} className="card-img" />
            <div className="card-info">
                <h4 className="card-title">{data.title}</h4>
                <p className="card-rating">Rating: {data.rating}</p>
            </div>
        </div>
    );
}
