import React from 'react';
import './FoodCorner.css';
import { NavLink } from "react-router-dom";

const FoodCorner = () => {
    return (
        <div className="foodCorner">
            <div className="foodMenu">
                <ul>
                    <li>
                        <NavLink exact to="/breakfast">Breakfast</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName='active' to="/">Lunch</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/dinner">Dinner</NavLink>
                    </li>
                </ul>
            </div>

            <button className="btn btnMuted">Checkout your food</button>
        </div>
    );
}
export default FoodCorner;