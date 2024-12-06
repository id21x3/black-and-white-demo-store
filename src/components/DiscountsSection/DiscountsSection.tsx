import React from 'react';
import './DiscountsSection.css';

const DiscountsSection: React.FC = () => {
    const discounts = [
        { id: 1, name: 'Backpack 23L black', price: 420, discount: 30, image: '/images/clothes/Backpack-black.jpg' },
        { id: 2, name: 'T-shirt white', price: 420, discount: 20, image: '/images/clothes/T-shirt-white.jpg' },
        { id: 3, name: 'Hoodie black', price: 420, discount: 25, image: '/images/clothes/Hoodie-black.jpg' },
    ];

    return (
        <section className="discounts-section">
            <h2>Discounts</h2>
            <div className="discount-products">
                {discounts.map(discount => (
                    <div key={discount.id} className="discount-card">
                        <div className="product-image">
                            <img src={discount.image} alt={discount.name} />
                        </div>
                        <h3>{discount.name}</h3>
                        <p>
                            ${discount.price} <span className="discount-tag">-{discount.discount}%</span>
                        </p>
                        <button>Buy</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DiscountsSection;
