import React, { useEffect, useState } from "react";
import AnimatedNumbers from "react-animated-numbers";
import styles from "./StoreInfo.module.css";

interface StoreStat {
    label: string;
    value: number;
}

const StoreInfo: React.FC = () => {
    const stats: StoreStat[] = [
        { label: "Sold items", value: 12890 },
        { label: "Satisfied customers", value: 2670 },
        { label: "Sold items in Europe", value: 1670 },
    ];

    const [currentValues, setCurrentValues] = useState<{ [key: number]: number }>(
        stats.reduce((acc, stat, index) => {
            acc[index] = stat.value;
            return acc;
        }, {} as { [key: number]: number })
    );

    useEffect(() => {
        const intervalIds: NodeJS.Timeout[] = [];

        stats.forEach((stat, index) => {
            const interval = setInterval(() => {
                setCurrentValues((prev) => ({
                    ...prev,
                    [index]: prev[index] + Math.floor(Math.random() * 5 + 1), // Увеличение числа
                }));
            }, 7000); // Интервал увеличен для замедления анимации
            intervalIds.push(interval);
        });

        return () => {
            intervalIds.forEach(clearInterval);
        };
    }, [stats]);

    return (
        <div className={styles.container}>
            {stats.map((stat, index) => (
                <div className={styles.statItem} key={index}>
                    <div className={styles.value}>
                        <AnimatedNumbers
                            animateToNumber={currentValues[index]}
                            fontStyle={{
                                fontSize: 36,
                                fontWeight: "bold",
                                color: "#333",
                            }}
                            includeComma
                            transitions={(i) => ({
                                type: "spring",
                                duration: i * 0.3 + 0.5,
                            })}
                        />
                    </div>
                    <div className={styles.label}>{stat.label}</div>
                </div>
            ))}
        </div>
    );
};

export default StoreInfo;
