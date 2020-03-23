import React from 'react';
import "./Cart.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { getDatabaseCart, removeFromDatabaseCart, addToDatabaseCart } from '../../database/databaseManager';
import foodsData from '../../foodsData';
import { Link } from 'react-router-dom';
import Auth from '../SignUpIn/useAuth';

const Cart = () => {
    const auth = Auth();
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

    // Remove product from cart when "Remove" btn clicked
    const removeProduct = productKey => {
        const newCart = cart.filter(prod => prod.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    //increase decrease handle
    const increaseHandle = food => {
        let count = food.quantity + 1
        addToDatabaseCart(food.key, count);
        window.location.reload();
        console.log(count)
    }
    const decreaseHandle = food => {
        let count = food.quantity - 1
        if (count >= 1) {
            addToDatabaseCart(food.key, count);
            window.location.reload();
            console.log(count)
        }
    }

    // Total
    let subTotal = 0;
    cart.map(food =>
        subTotal = subTotal + food.price * food.quantity
    )
    let tax = subTotal * .05;
    let deliveryChr = 5

    return (
        <div className="cartPage">
            <div className="deliveryDetails">
                <h2>Edit Delivery details</h2>
                <form>
                    <input className="input" type="text" name="where" placeholder="Where to deliver" required />
                    <input className="input" type="text" name="street" placeholder="Street" required />
                    <input className="input" type="text" name="flat" placeholder="Flat, suite or floor" required />
                    <input className="input" type="text" name="business" placeholder="Business name" required />
                    <textarea className="input" name="instructor" rows="5" placeholder="Add delivery instructor"></textarea>

                    <input type="submit" value="Save & Continue" className="btn btnFull" />
                </form>
            </div>

            <div className="cartDetails">
                <div className="cartAddress">
                    <h4><span>From</span> Gulshan Plaza Restaurant GPR</h4>
                    <p>Arriving in 20-30 min</p>
                    <p className="road">107 Rd no 8</p>
                </div>

                <div className="cartItems">
                    {
                        cart.map(food =>
                            <div className="cartItem">
                                <button className="removeIcon" onClick={() => removeProduct(food.key)}><FontAwesomeIcon icon={faTimes} /></button>

                                <div className="img">
                                    <img src={food.img} alt="Cart" />
                                </div>
                                <div className="details">
                                    <h5>{food.title} <span style={{ fontSize: "14px" }}>(${food.price})</span></h5>
                                    <p className="price">${(food.price * food.quantity).toFixed(2)}</p>
                                    <small className="deliveryFee">delivery charge free</small>
                                </div>
                                <div className="incDec">
                                    <button onClick={() => decreaseHandle(food)} className="decBtn">
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <span> {food.quantity} </span>
                                    <button onClick={() => increaseHandle(food)} className="incBtn">
                                        <FontAwesomeIcon className="plusIcon" icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="shoppingCost">
                    <div>
                        <p>Subtotal. {cart.length} items</p>
                        <p>${subTotal.toFixed(2)}</p>
                    </div>
                    <div>
                        <p>Tax 5%</p>
                        <p>${tax.toFixed(2)}</p>
                    </div>
                    <div>
                        <p>Delivery charge</p>
                        <p>${deliveryChr.toFixed(2)}</p>
                    </div>
                    <div className="totalCost">
                        <p>Total</p>
                        <p>${(subTotal + (tax) + deliveryChr).toFixed(2)}</p>
                    </div>
                </div>

                <div style={{ textAlign: "center" }}>
                    <Link to="/checkout">
                        {
                            auth.user ? <button className="btn btnFull">Place Order</button> : <button className="btn btnMuted">Place Order</button>
                        }
                    </Link>
                </div>

            </div>
        </div >
    );
};

export default Cart;