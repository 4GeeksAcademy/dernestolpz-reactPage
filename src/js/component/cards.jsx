import React from "react";

export const Card = ({ title, description, image }) => {
    return (
        <div className="card col-3" style={{ width: "18rem", margin: "1rem" }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column" style={{ height: '100%' }}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary mt-auto">
                View Product
            </a>
        </div>
    </div>
    
    );
};
