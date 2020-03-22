import React from 'react';
import './Checkout.css';
import deleveryMan from '../../img/Image/delevery-man.png';
import map from '../../img/map.png';

const Checkout = () => {
    return (
        <div className="lacationContainer">
            <div className="map">
                <img src={map} alt="" />
            </div>

            <div className="locationPart">
                <div className="deliveryImg">
                    <img src={deleveryMan} alt="" />
                </div>
                <div className="locationAddress">
                    <div className="location">
                        <h2>Your Location</h2>
                        <p>107 Rd No 8</p>
                    </div>
                    <div className="address">
                        <h2>Shop Address</h2>
                        <p>Gulshan Plaza Restaura GPR</p>
                    </div>
                </div>

                <div className="deleveryTime">
                    <h1>09:30</h1>
                    <p>Estimated dalivery time</p>
                </div>

                <div className="deleveryRadier">
                    <div className="raiderImg">
                        <img src={map} alt="" />
                    </div>
                    <div className="raiderContent">
                        <h2>Hamim</h2>
                        <p>Your raider</p>
                    </div>
                </div>

                <button className="contactBtn">Contact</button>
            </div>
        </div>
    );
};

export default Checkout;