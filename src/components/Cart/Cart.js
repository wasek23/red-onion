import React from 'react';
import "./Cart.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { getDatabaseCart } from '../../database/databaseManager';
import foodsData from '../../foodsData';
import { Link } from 'react-router-dom';

const Cart = () => {
    const foodItems = foodsData;
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const foodKeys = Object.keys(savedCart);
        // const foodCounts = Object.values(savedCart);

        const cartFoods = foodKeys.map(key => {
            const food = foodItems.find(food => food.key === key);
            // food.quantity = savedCart[key];
            return food;
        });

        setCart(cartFoods);
    }, []);
    console.log(cart);

    //increase decrease handle
    let [count, setCount] = useState(1);
    const increaseHandle = () => {
        setCount(count + 1)
    }
    const DecreaseHandle = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    // const foodPrice = food.price * count;

    return (
        <div className="cartPage">
            <div className="deliveryDetails">
                <h2>Edit Delivery details</h2>
                <form>
                    <input className="input" type="text" name="where" placeholder="Where to deliver" />
                    <input className="input" type="text" name="street" placeholder="Street" />
                    <input className="input" type="text" name="flat" placeholder="Flat, suite or floor" />
                    <input className="input" type="text" name="business" placeholder="Business name" />
                    <textarea className="input" name="instructor" rows="5" placeholder="Add delivery instructor"></textarea>
                    <Link to="/checkout">
                        <input type="submit" value="Save & Continue" className="btn btnFull" />
                    </Link>
                </form>
            </div>

            <div className="cartDetails">
                <div className="cartAddress">
                    <h4>From Gulshan Plaza Restaurant GPR</h4>
                    <p>Arriving in 20-30 min</p>
                    <p>107 Rd no 8</p>
                </div>

                <div className="cartItems">
                    {
                        cart.map(food =>
                            <div className="cartItem">
                                <div className="img">
                                    <img src={food} alt="Cart" />
                                </div>
                                <div className="details">
                                    <h5></h5>
                                    <p className="price"></p>
                                    <small className="deliveryFee"></small>
                                </div>
                                <div className="incDec">
                                    <button onClick={DecreaseHandle}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <span>{count}</span>
                                    <button onClick={increaseHandle}>
                                        <FontAwesomeIcon className="plusIcon" icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div >
    );
};

export default Cart;