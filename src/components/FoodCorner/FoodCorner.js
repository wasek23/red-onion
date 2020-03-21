//Appling CSS in App.css
import React from 'react';
import './FoodCorner.css';
import foodsData from "../../foodsData";

const FoodCorner = () => {
    const foodItems = foodsData;

    return (
        <div className="foodCorner">
            <div className="foodMenu">
                <ul>
                    <li><a href="/">Breakfast</a></li>
                    <li><a href="/" className="active">Lunch</a></li>
                    <li><a href="/">Dinner</a></li>
                </ul>
            </div>

            <div className="foodItems">
                {
                    foodItems.map(food =>
                        <div className="foodItem">
                            <img src={food.img} alt="food" />
                            <h3 className="foodTitle">{food.title}</h3>
                            <p className="foodShortDisc">{food.shortDisc}</p>
                            <h2 className="foodPrice">${food.price}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default FoodCorner;