import React from 'react';
import logo2 from './logo/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="header">
            <div className="headerContainer">
                <a href="/" className="headerLogo">
                    <img src={logo2} alt="" />
                </a>
                <div className="headerNav">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <button className="btn btnLight">Login</button>
                    <button className="btn btnFull">Sign Up</button>
                </div>
            </div>
        </header>
    );
};

export default Header;