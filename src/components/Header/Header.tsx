import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-logo">Black&White</div>
            <nav className="header-nav">
                <a href="#new">New</a>
                <a href="#discounts">Discounts</a>
                <a href="#for-girls">For Girls</a>
                <a href="#for-guys">For Guys</a>
                <a href="#about-us">About Us</a>
            </nav>
            <div className="header-contact">
                <button className="call-button">Make a Call</button>
                <div className="cart">$150</div>
            </div>
        </header>
    );
};

export default Header;
