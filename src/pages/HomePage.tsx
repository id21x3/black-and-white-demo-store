import React from 'react';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';
import productData from './clothingItems.json';
import productDiscountData from './clothingDiscountItems.json';
import Slider from "../components/Slider/Slider";
import CardPair from "../components/CardPair/CardPair";
import StoreInfo from "../components/StoreInfo/StoreInfo";

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <Slider />
            <Carousel cards={productData.slice(0, 5)} heading='New'/>
            <Carousel cards={productDiscountData.slice(0, 5)} heading='Discount'/>
            <CardPair />
            <StoreInfo />
            <Footer />
        </div>
    );
};

export default HomePage;