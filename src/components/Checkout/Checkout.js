import React from 'react';
import './Checkout.css';
import DeliveryMan from '../../img/delivery-man.png';
import Map from '../../img/map.png';
import Rider from '../../img/rider.png'

const Checkout = () => {
    return (
        <div className="locationContainer">
            <div className="map">
                <img src={Map} alt="" />
            </div>

            <div className="locationPart">
                <div className="deliveryImg">
                    <img src={DeliveryMan} alt="" />
                </div>
                <div className="locationAddress">
                    <div className="location">
                        <h2>Your Location</h2>
                        <p>107 Rd No 8</p>
                    </div>
                    <div className="address">
                        <h2>Shop Address</h2>
                        <p>Gulshan Plaza Restaurant GPR</p>
                    </div>
                </div>

                <div className="deliveryTime">
                    <h1>09:30</h1>
                    <p>Estimated delivery time</p>
                </div>

                <div className="deliveryRider">
                    <div className="raiderImg">
                        <img src={Rider} alt="" />
                    </div>
                    <div className="raiderContent">
                        <h2>Hamim</h2>
                        <p>Your raider</p>
                    </div>
                </div>

                <button className="btn btnFull" style={{ width: "100%" }}>Contact</button>
            </div>
        </div>
    );
};

export default Checkout;