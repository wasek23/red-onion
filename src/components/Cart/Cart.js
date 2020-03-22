import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart } from '../../database/databaseManager';
import foodsData from '../../foodsData';

const Cart = () => {
    const foodItems = foodsData;
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const foodKeys = Object.keys(savedCart);
        // const foodCounts = Object.values(savedCart);

        // const cartFoods = foodKeys.map(key => {
        //     const food = foodItems.find(food => food.key === key);
        //     food.quantity = savedCart[key];
        //     return food;
        // });

        setCart(savedCart);
    }, []);
    console.log(cart);

    return (
        <div className="cartPage">
            <h1>Cart Page</h1>
        </div>
    );
};

export default Cart;