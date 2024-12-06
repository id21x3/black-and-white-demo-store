import React from 'react';
import './ClothesSection.css';

const ClothesSection: React.FC = () => {
    const clothes = [
        { id: 1, name: 'Black Hoodie', price: 420, image: '/path-to-hoodie-black.jpg' },
        { id: 2, name: 'White T-shirt', price: 320, image: '/path-to-tshirt-white.jpg' },
        { id: 3, name: 'Black Joggers', price: 380, image: '/path-to-joggers-black.jpg' },
        { id: 4, name: 'White Sneakers', price: 520, image: '/path-to-sneakers-white.jpg' },
    ];

    return (
        <section className="clothes-section">
            <h2>Our Collection</h2>
            <div className="clothes-grid">
                {clothes.map((item) => (
                    <div key={item.id} className="clothes-card">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClothesSection;
