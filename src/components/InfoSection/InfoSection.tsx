import React from 'react';
import './InfoSection.css';

const InfoSection: React.FC = () => {
    return (
        <section className="info-section">
            <div className="info-content">
                <h2>Why Choose Black&White?</h2>
                <p>
                    At *Black&White*, we focus on minimalism, high-quality materials, and timeless designs. Our mission is to provide
                    modern clothing and accessories that fit your style effortlessly.
                </p>
                <p>
                    - Free worldwide shipping
                    - Sustainable and eco-friendly production
                    - 24/7 customer support
                </p>
            </div>
            <div className="info-image">
                <img src="/path-to-info-image.jpg" alt="Why Choose Us" />
            </div>
        </section>
    );
};

export default InfoSection;
