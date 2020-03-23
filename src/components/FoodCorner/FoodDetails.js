import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import foodsData from "../../foodsData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './FoodDetails.css';
// import { useParams } from 'react-router-dom';
import { addToDatabaseCart } from '../../database/databaseManager';

const FoodDetails = () => {
    const { foodKey } = useParams();
    const food = foodsData.find(prod => prod.key === foodKey);

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
    const foodPrice = food.price * count;
    let cartCount = count;

    // Cart
    const [cart, setCart] = useState([]);
    const addFoodToCart = food => {
        const toBeAddedKey = food.key;
        const sameFood = cart.find(foo => foo.key === toBeAddedKey);

        let count = cartCount;
        let newCart;
        if (sameFood) {
            count = sameFood.quantity + 1;
            sameFood.quantity = count;

            const othersFood = cart.filter(prod => prod.key !== toBeAddedKey);
            newCart = [...othersFood, sameFood];
        } else {
            food.quantity = 1;
            newCart = [...cart, food];
        }

        setCart(newCart);
        addToDatabaseCart(food.key, count);
    }

    return (
        <div className="singleFoodPage">
            <div className="foodDetail">
                <div className="fDetailsContent">
                    <h1 className="category">{food.title}</h1>
                    <p className="foodLongDisc">{food.longDisc}</p>

                    <div className="priceContainer">
                        <h2 className="foodPrice">${foodPrice}</h2>

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

                    <br /><br />
                    <button className="btn btnFull" onClick={() => addFoodToCart(food)}><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
                </div>

                <div className="detailImg">
                    <img src={food.img} alt="food" />
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;