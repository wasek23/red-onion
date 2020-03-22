import React from 'react';
import foodsData from '../../foodsData';
import { Link } from 'react-router-dom';

const Lunch = () => {
    const foodItems = foodsData;
    const lunchFoods = foodItems.filter(food => food.cat === "lunch");

    return (
        <div className="foodItems">
            {
                lunchFoods.map(food =>
                    <div className="foodItem">
                        <Link to={"/food/" + food.key}><img src={food.img} alt="food" /></Link>
                        <h3><Link to={"/food/" + food.key} className="foodTitle">{food.title}</Link></h3>
                        <p className="foodShortDisc">{food.shortDisc}</p>
                        <h2 className="foodPrice">${food.price}</h2>
                    </div>
                )
            }
        </div>
    );
};

export default Lunch;