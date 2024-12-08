import React from 'react';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';
import productData from './clothingItems.json';
import Slider from "../components/Slider/Slider";

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <Slider />
            <Carousel cards={productData.slice(0, 5)} />
            <Footer />
        </div>
    );
};

export default HomePage;