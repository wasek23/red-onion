import React from 'react';
import Logo from './logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerFlex" style={{ marginBottom: "60px" }}>
                <div className="footerLogo">
                    <img src={Logo} alt="" />
                </div>

                <div className="footerTopRight">
                    <ul className="footerNav">
                        <li><a href="/">About online food</a></li>
                        <li><a href="/">Read our blog</a></li>
                        <li><a href="/login">Sign up to delivery</a></li>
                        <li><a href="/">Add your restaurant</a></li>
                    </ul>

                    <ul className="footerNav">
                        <li><a href="/">Get help</a></li>
                        <li><a href="/">Read FAQs</a></li>
                        <li><a href="/">View all cities</a></li>
                        <li><a href="/">Restaurant near me</a></li>
                    </ul>
                </div>
            </div>

            <div className="footerFlex">
                <p className="footerCopy">Copyright &copy; 2020 by <a href="https://red-onion-foo.firebaseapp.com/">Red Onion Foods</a></p>

                <ul className="footerMenu">
                    <li><a href="/">Privacy Policy.</a></li>
                    <li><a href="/">Terms ou use</a></li>
                    <li><a href="/">Pricing</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;