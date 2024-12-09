import React, { useEffect, useState } from 'react';
import './Slider.css';

const Slider: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        '/black-and-white-demo-store/images/slides/Image-1.jpg',
        '/black-and-white-demo-store/images/slides/Image-2.jpg'
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000); // меняем изображение каждые 5 секунд

        return () => clearInterval(intervalId); // очищаем интервал при размонтировании
    }, []);

    return (
        <div className="slider-container">
            <div
                className="slider-background"
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    transition: 'background-image 1s ease-in-out',
                }}
            ></div>
            <div className="slider-text">
                <h1>The most popular and coolest black and white clothes for you in our store.</h1>
                <p>In our store you will see the most popular and coolest clothing options in black and white style. Visit our store and see for yourself.</p>
            </div>
        </div>
    );
};

export default Slider;
