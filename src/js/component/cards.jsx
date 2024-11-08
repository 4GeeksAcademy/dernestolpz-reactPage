import React from "react";

export const Card = ({ title, description, image }) => {
    return (
        <div className="card" style={{ width: "18rem", margin: "1rem" }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">
                    View Product
                </a>
            </div>
        </div>
    );
};
