import React from 'react';
import foodsData from '../../foodsData';
import { Link } from 'react-router-dom';

const Breakfast = () => {
    const foodItems = foodsData;
    const dinnerFoods = foodItems.filter(food => food.cat === "dinner");

    return (
        <div className="foodItems">
            {
                dinnerFoods.map(food =>
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

export default Breakfast;