import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import './NewSection.css';

const NewSection: React.FC = () => {
    const products = [
        { id: 1, name: 'T-shirt black', price: 420, image: '/images/clothes/T-shirt-black.jpg' },
        { id: 2, name: 'Hoodie black', price: 420, image: '/images/clothes/Hoodie-black.jpg' },
        { id: 3, name: 'Backpack 23L black', price: 420, image: '/images/clothes/Backpack-black.jpg' },
        { id: 4, name: 'T-shirt white', price: 420, image: '/images/clothes/T-shirt-white.jpg' },
        { id: 5, name: 'T-shirt black', price: 420, image: '/images/clothes/T-shirt-black.jpg' },
        { id: 6, name: 'Hoodie black', price: 420, image: '/images/clothes/Hoodie-black.jpg' },
        { id: 7, name: 'Backpack 23L black', price: 420, image: '/images/clothes/Backpack-black.jpg' },
        { id: 8, name: 'T-shirt white', price: 420, image: '/images/clothes/T-shirt-white.jpg' }
    ];

    const Arrow = ({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) => (
        <button className={`arrow ${direction}`} onClick={onClick}>
            {direction === 'left' ? '\u276E' : '\u276F'}
        </button>
    );

    const Card = ({ product }: { product: typeof products[number] }) => (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
                <button><b>Buy</b></button>
            </div>
        </div>
    );

    return (
        <section className="new-section">
            <h2>New</h2>
            <div className="carousel">
                <Arrow direction="left" onClick={() => { /* Вызов скроллинга влево */ }} />
                <ScrollMenu>
                    {products.map((product) => (
                        <div key={product.id} className="horizontal-list">
                            <Card product={product} />
                        </div>
                    ))}
                </ScrollMenu>
                <Arrow direction="right" onClick={() => { /* Вызов скроллинга вправо */ }} />
            </div>
        </section>
    );
};

export default NewSection;
