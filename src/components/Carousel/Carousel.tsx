import React, { useRef, useState } from 'react';
import styles from './Carousel.module.css';

interface Card {
    id: number;
    image: string;
    title: string;
    price: string;
}

interface CarouselProps {
    cards: Card[];
    heading: string; // Новое свойство для заголовка
}

const Carousel: React.FC<CarouselProps> = ({ cards, heading }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsContainerRef = useRef<HTMLDivElement>(null);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleScroll = (direction: 'left' | 'right') => {
        if (cardsContainerRef.current) {
            const container = cardsContainerRef.current;
            const scrollAmount = 200; // Количество пикселей для прокрутки
            if (direction === 'left') {
                container.scrollLeft -= scrollAmount;
            } else {
                container.scrollLeft += scrollAmount;
            }
        }
    };

    return (
        <div className={styles.carousel}>
            {/* Заголовок */}
            <div className={styles.heading}>{heading}</div>

            {/* Кнопка прокрутки влево */}
            <button
                className={styles.arrow}
                onClick={() => handleScroll('left')}
            >
                &lt;
            </button>

            {/* Контейнер карточек */}
            <div className={styles.cardsContainer} ref={cardsContainerRef}>
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`${styles.card} ${
                            index === currentIndex ? styles.active : ''
                        }`}
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className={styles.image}
                        />
                        <div className={styles.info}>
                            <h3 className={styles.title}>{card.title}</h3>
                            <p className={styles.price}>{card.price}</p>
                            <button className={styles.buyButton}>BUY</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Кнопка прокрутки вправо */}
            <button
                className={styles.arrow}
                onClick={() => handleScroll('right')}
            >
                &gt;
            </button>
        </div>
    );
};

export default Carousel;
