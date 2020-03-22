import React, { createContext, useContext, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import { useState } from "react";
import { Route, Redirect } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();
export const AuthContextProvider = props => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={
                ({ location }) => auth.user ? (children) : (<Redirect to={{ pathname: "/login", state: { from: location } }} />)
            }
        />
    );
}

const getUser = user => {
    const { displayName, email, photoURL, password } = user;
    return { name: displayName, email, photo: photoURL, password }
}

const Auth = () => {
    const [user, setUser] = useState(null);

    // Sign in with google
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider).then(res => {
            setUser(getUser(res.user));
            return res.user;
        }).catch(err => {
            setUser(null);
            return err.message;
        });
    }

    // Create account
    const signUp = (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
            setUser(getUser(res.user));
            return res.user;
        }).catch(err => {
            setUser(null);
            return err.message;
        });
    }

    // Sign in
    const signIn = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
            setUser(getUser(res.user));
            return res.user;
        }).catch(err => {
            setUser(null);
            return err.message;
        });
    }

    // Sign out
    const signOut = () => {
        return firebase.auth().signOut().then(res => {
            setUser(null);
        }).catch(err => {
            return err.message;
        });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (usr) {
            if (usr) {
                setUser(getUser(usr));
            } else {
                console.log("No user is signed in.");
            }
        });
    }, []);

    return {
        user, signInWithGoogle, signUp, signIn, signOut
    }
}
export default Auth;