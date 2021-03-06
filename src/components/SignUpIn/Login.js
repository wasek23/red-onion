import React from 'react';
import './Login.css'
import Auth from './useAuth';
import { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "", success: "", error: "", isValid: false });
    const auth = Auth();

    // Change Form
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

    // Sign up/in
    const signUpBtn = (user) => {
        auth.signUp(user.email, user.password).then(res => {
            window.location.pathname = "/login";
            console.log(res);
        });
    }

    const signInBtn = (user) => {
        auth.signIn(user.email, user.password).then(res => {
            window.location.pathname = "/cart";
            console.log(res);
        });
    }

    // input check
    const isValidName = email => /^[a-zA-Z ]{2,30}$/.test(email);
    const isValidEmail = email => /(.+)@(.+){2,}\.(.+){2,}/.test(email);
    const isValidPassword = pass => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/.test(pass);

    // Input value
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
        if (e.target.name === "confirmPassword") {
            let passValue = document.getElementById("passValue").value;

            if (passValue !== e.target.value) {
                newUserInfo.error = "Password did not match";
                isValid = false;
            } else {
                newUserInfo.error = "";
                isValid = true;
            }
        }

        newUserInfo[e.target.name] = e.target.value;
        newUserInfo.isValid = isValid;
        setUser(newUserInfo);
    }

    return (
        <div className="loginPage">
            {
                !auth.user && <button onClick={signInGoogleBtn} className="btn btnFull googleSign">Google Sign In</button>
            }
            <p className="red formText">{user.error}</p>
            <p className="green formText">{user.success}</p>
            <div className="form" id="signUp" style={{ display: haveAccount ? "none" : "block" }} >
                <form onSubmit={() => signUpBtn(user)}>
                    <input className="input" type="text" name="name" onBlur={inputChange} placeholder="Name" required />
                    <input className="input" type="email" name="email" onBlur={inputChange} placeholder="Email" required />
                    <input id="passValue" className="input" type="password" name="password" onBlur={inputChange} placeholder="Password" required />
                    <input className="input" type="password" name="confirmPassword" onBlur={inputChange} placeholder="Confirm Password" required />
                    <input type="submit" value="Sign Up" className="btn btnFull" />
                </form>
                <p className="green formText" onClick={goSignIn}>Already have an account? Sign In</p>
            </div>

            <div className="form" id="signIn" style={{ display: haveAccount ? "block" : "none" }} >
                <form onSubmit={() => signInBtn(user)}>
                    <input className="input" type="email" name="email" onBlur={inputChange} placeholder="Email" required />
                    <input className="input" type="password" name="password" onBlur={inputChange} placeholder="Password" required />
                    <input type="submit" value="Sign In" className="btn btnFull" />
                </form>
                <p className="red formText" onClick={goSignUp}>Not have an account? Sign Up</p>
            </div>
        </div>
    );
}

export default Login;