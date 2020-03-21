import React from 'react';
import './HomeHero.css';

const HomeHero = () => {
    return (
        <div className="homeHero">
            <div className="heroBox">
                <h1>Best food waiting for your bally</h1>
                <div className="heroSearch">
                    <input type="text" placeholder="Search food items" className="searchInput" />
                    <input type="submit" value="Search" className="btn btnFull" />
                </div>
            </div>

        </div>
    );
};
export default HomeHero;