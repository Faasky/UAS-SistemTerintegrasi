import React from "react";
import "./index.css"; // Gunakan untuk styling

export default function Card({ data, onClick }) {
    // Cek apakah data memiliki atribut yang diperlukan
    const imageUrl = data?.i?.imageUrl || 'default-image-url.jpg'; // Gambar default jika tidak ada imageUrl
    const title = data?.l || 'No Title Available'; // Teks default jika tidak ada judul
    const genre = data?.q || 'No Genre Available'; // Teks default jika genre tidak ada

    return (
        <div className="card" onClick={onClick}>
            {data ? (
                <>
                    <figure className="card-image">
                        <img src={imageUrl} alt={title} className="image" />
                    </figure>
                    <div className="card-info">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-genre">{genre}</p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
