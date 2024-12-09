import React, { useState, MouseEvent, useCallback } from "react";
import styles from "./CardPair.module.css";

function throttle<T extends (...args: any[]) => any>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

const CardPair: React.FC = () => {
    const [rotations, setRotations] = useState<{ [key: number]: { x: number; y: number } }>({});

    const handleMouseMove = useCallback(
        throttle((e: MouseEvent<HTMLDivElement>, index: number) => {
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;
            const rotateY = (x - centerY) / 50;
            const rotateX = (centerX - y) / 50;

            setRotations((prev) => ({
                ...prev,
                [index]: { x: rotateX, y: rotateY },
            }));
        }, 100),
        []
    );

    const handleMouseLeave = (index: number) => {
        setRotations((prev) => ({
            ...prev,
            [index]: { x: 0, y: 0 },
        }));
    };

    const cards = [
        { label: "Men", imageUrl: "/images/clothes/16x9-men-card.jpg" },
        { label: "Women", imageUrl: "/images/clothes/16x9-women-card.jpg" },
    ];

    return (
        <div className={styles.CardPair}>
            <div className={styles.heading}>Clothes</div>
            <div className={styles.cardContainer}>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={styles.card}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        style={{
                            transform: `perspective(1000px) rotateX(${rotations[index]?.x || 0}deg) rotateY(${rotations[index]?.y || 0}deg)`,
                        }}
                    >
                        <div
                            className={styles.image}
                            style={{backgroundImage: `url(${card.imageUrl})`}}/>
                        <div className={styles.label}>{card.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardPair;
