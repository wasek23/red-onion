import React from 'react';
import './Login.css'
import Auth from './useAuth';
import { useState } from 'react';

const Login = () => {
    const auth = Auth();

    const [haveAccount, setHaveAccount] = useState(false);
    const goSignIn = () => {
        setHaveAccount(true);
    }
    const goSignUp = () => {
        setHaveAccount(false);
    }

    const signInGoogleBtn = () => {
        auth.signInWithGoogle().then(res => {
            window.location.pathname = "/cart";
        });
    }

    const signUpBtn = () => {
        auth.signUp().then(res => {
            window.location.pathname = "/login";
            console.log(res);
        });
    }

    const signInBtn = () => {
        auth.signIn().then(res => {
            window.location.pathname = "/cart";
            console.log(res);
        });
    }

    // Sign in with email and password
    const isValidName = email => /^[a-zA-Z ]{2,30}$/.test(email);
    const isValidEmail = email => /(.+)@(.+){2,}\.(.+){2,}/.test(email);
    const isValidPassword = pass => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/.test(pass);

    // Input value
    const user = auth;
    const inputChange = e => {
        const newUserInfo = { ...user }

        // Validation
        let isValid = true;
        if (e.target.name === "name") {
            isValid = isValidName(e.target.value);

            if (!isValidName(e.target.value)) {
                newUserInfo.error = "Name should have contains only letters and at least 2 to up to 30 letters.";
            } else {
                newUserInfo.error = "";
            }
        }
        if (e.target.name === "email") {
            isValid = isValidEmail(e.target.value);

            if (!isValidEmail(e.target.value)) {
                newUserInfo.error = "Invalid Email formate.";
            } else {
                newUserInfo.error = "";
            }
        }
        if (e.target.name === "password") {
            isValid = isValidPassword(e.target.value);

            if (!isValidPassword(e.target.value)) {
                newUserInfo.error = "Password should have contained 1 uppercase and lowercase letter, 1 number, 1 special character and at least 8 to up to 30 characters.";
            } else {
                newUserInfo.error = "";
            }
        }

        newUserInfo[e.target.name] = e.target.value;
        newUserInfo.isValid = isValid;
        // setUser(newUserInfo);
    }

    return (
        <div className="loginPage">
            {
                !auth.user && <button onClick={signInGoogleBtn} className="btn btnFull googleSign">Google Sign In</button>
            }
            <div className="form" id="signUp" style={{ display: haveAccount ? "none" : "block" }} >
                <form>
                    <input className="input" type="name" name="name" onBlur={inputChange} placeholder="Name" />
                    <input className="input" type="email" name="email" onBlur={inputChange} placeholder="Email" />
                    <input className="input" type="password" name="password" onBlur={inputChange} placeholder="Password" />
                    <input className="input" type="password" name="confirmPassword" onBlur={inputChange} placeholder="Confirm Password" />
                    <input type="submit" onClick={signUpBtn} value="Sign Up" className="btn btnFull" />
                </form>
                <p className="green formText" onClick={goSignIn}>Already have an account? Sign In</p>
            </div>

            <div className="form" id="signIn" style={{ display: haveAccount ? "block" : "none" }} >
                <form>
                    <input className="input" type="email" name="email" onBlur={inputChange} placeholder="Email" />
                    <input className="input" type="password" name="password" onBlur={inputChange} placeholder="Password" />
                    <input type="submit" onClick={signInBtn} value="Sign In" className="btn btnFull" />
                </form>
                <p className="red formText" onClick={goSignUp}>Not have an account? Sign Up</p>
            </div>
        </div>
    );
}

export default Login;