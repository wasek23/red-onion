import React from 'react';
import Auth from '../SignUpIn/useAuth';

const CheckoutBtn = () => {
    const auth = Auth()

    return (
        <div className="foodCorner">
            {
                auth.user ? <button className="btn btnFull">Checkout your food</button> : <button className="btn btnMuted">Checkout your food</button>
            }
        </div>
    );
};

export default CheckoutBtn;