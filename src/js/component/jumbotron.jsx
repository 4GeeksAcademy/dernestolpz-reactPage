import React from 'react';

export const Jumbotron = () => {
    return (
        <div className="jumbotron text-center jumbotron-custom bg-image" style={{ backgroundImage: "url('https://st.depositphotos.com/1000163/4876/i/450/depositphotos_48761959-stock-photo-different-perfume-bottles-on-the.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "50vh" }}>
            <h1 className="display-4 text-white">Discover Your Perfect Scent</h1>
            <p className="lead text-white">Explore our exclusive collection of perfumes for every taste. Find the essence that defines you!</p>
            <a className="btn btn-primary btn-lg" href="#shop" role="button">View Collection</a>
        </div>

    );
};

