import React from 'react';
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import NewSection from '../components/NewSection/NewSection';
import DiscountsSection from '../components/DiscountsSection/DiscountsSection';
import ClothesSection from '../components/ClothesSection/ClothesSection';
import InfoSection from '../components/InfoSection/InfoSection';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <Slider />
            <NewSection />
            <DiscountsSection />
            <ClothesSection />
            <InfoSection />
            <Footer />
        </div>
    );
};

export default Home;
