import React from 'react';
import Auth from '../SignUpIn/useAuth';
import { Link } from 'react-router-dom';

const CheckoutBtn = () => {
    const auth = Auth()

    return (
        <div className="foodCorner">
            <Link to="/checkout">
                {
                    auth.user ? <button className="btn btnFull">Checkout your food</button> : <button className="btn btnMuted">Checkout your food</button>
                }
            </Link>
        </div>
    );
};

export default CheckoutBtn;