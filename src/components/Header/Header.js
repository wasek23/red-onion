import React, { useState, useEffect } from 'react';
import Logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Auth from '../SignUpIn/useAuth';
import { getDatabaseCart } from '../../database/databaseManager';

const Header = () => {
    const auth = Auth();

    const signOutBtn = () => {
        auth.signOut().then(res => {
            window.location.pathname = "/"
        });
    }

    const [cartKey, setCartKey] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        delete savedCart.undefined;
        const foodKeys = Object.keys(savedCart);
        // const foodCounts = Object.values(savedCart);

        setCartKey(foodKeys);
    }, []);

    return (
        <header className="header">
            <div className="headerContainer">
                <a href="/" className="headerLogo">
                    <img src={Logo} alt="" />
                </a>
                <div className="headerNav">
                    <a href="/inventory" className="btn">Inventory</a>
                    <a href="/cart" className="cartIcon"><FontAwesomeIcon icon={faShoppingCart} /> <span className="cartCount">{cartKey.length}</span></a>
                    {
                        auth.user ? <span className="userInfo"><h3>{auth.user.name}</h3><img src={auth.user.photo} alt="User Pic" /><button onClick={signOutBtn} className="btn btnFull">Sign Out</button></span> : <a href="/login" className="btn btnFull">Sign Up</a>
                    }

                </div>
            </div>
        </header>
    );
};

export default Header;