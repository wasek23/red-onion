import React from 'react';
import './ChooseUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import FastDelivery from '../../img/fast-delivery.png';
import AutoResponder from '../../img/auto-responder.png';
import HomeDelivery from '../../img/home-delivery.png';
import DeliveryIcon1 from '../../img/icons/delivery-icon1.png';
import DeliveryIcon2 from '../../img/icons/delivery-icon2.png';
import DeliveryIcon3 from '../../img/icons/delivery-icon3.png';

const ChooseUs = () => {
    return (
        <section className="delivery">
            <div className="deliveryContainer">
                <h2>Why you choose us</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. <br /> It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>

                <div className="deliveryRow">
                    <div className="deliveryCart">
                        <img src={FastDelivery} alt="" />
                        <div className="deliveryCol">
                            <div className="deliveryIcon">
                                <img src={DeliveryIcon3} alt="" />
                            </div>

                            <div className="deliveryContent">
                                <h3>Fast Delivery</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                                <a href="/">See more <FontAwesomeIcon icon={faArrowRight} /> </a>
                            </div>
                        </div>
                    </div>

                    <div className="deliveryCart">
                        <img src={AutoResponder} alt="" />
                        <div className="deliveryCol">
                            <div className="deliveryIcon">
                                <img src={DeliveryIcon2} alt="" />
                            </div>

                            <div className="deliveryContent">
                                <h3>A Good Auto Responder</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                                <a href="/">See more <FontAwesomeIcon icon={faArrowRight} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="deliveryCart">
                        <img src={HomeDelivery} alt="" />
                        <div className="deliveryCol">
                            <div className="deliveryIcon">
                                <img src={DeliveryIcon1} alt="" />
                            </div>

                            <div className="deliveryContent">
                                <h3>Home Delivery</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                                <a href="/">See more <span><FontAwesomeIcon icon={faArrowRight} /></span></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ChooseUs;