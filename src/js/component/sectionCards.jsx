import React from "react";
import { Card } from "./cards";

export const SectionCards = ({ products }) => {
    return (
        <div className="card-container">
            {products.map((card, index) => (
                <Card
                    key={`${card.name}-${index}`}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                />
            ))}
        </div>
    );
};
