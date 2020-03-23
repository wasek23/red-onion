import React, { useState } from 'react';
import Logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Auth from '../SignUpIn/useAuth';
import { getDatabaseCart } from '../../database/databaseManager';
import foodsData from '../../foodsData';
import { useEffect } from 'react';

const Header = () => {
    const auth = Auth();

    const signOutBtn = () => {
        auth.signOut().then(res => {
            window.location.pathname = "/"
        });
    }

    const foodItems = foodsData;
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        delete savedCart.undefined;
        const foodKeys = Object.keys(savedCart);
        // const foodCounts = Object.values(savedCart);

        const cartFoods = foodKeys.map(key => {
            const food = foodItems.find(food => food.key === key);
            food.quantity = savedCart[key];
            return food;
        });

        setCart(cartFoods);
    }, [foodItems]);

    return (
        <header className="header">
            <div className="headerContainer">
                <a href="/" className="headerLogo">
                    <img src={Logo} alt="" />
                </a>
                <div className="headerNav">
                    <a href="/cart" className="cartIcon"><FontAwesomeIcon icon={faShoppingCart} /> <span className="cartCount">{cart.length}</span></a>
                    {
                        auth.user ? <span className="userInfo"><h3>{auth.user.name}</h3><img src={auth.user.photo} alt="User Pic" /><button onClick={signOutBtn} className="btn btnFull">Sign Out</button></span> : <a href="/login" className="btn btnFull">Sign Up</a>
                    }

                </div>
            </div>
        </header>
    );
};

export default Header;