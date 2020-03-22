import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContextProvider } from './components/SignUpIn/useAuth';

import Header from './components/Header/Header';
import HomeHero from './components/HomeHero/HomeHero';

import FoodCorner from './components/FoodCorner/FoodCorner';
import Lunch from './components/FoodCorner/Lunch';
import Breakfast from './components/FoodCorner/Breakfast';
import Dinner from './components/FoodCorner/Dinner';
import FoodDetails from './components/FoodCorner/FoodDetails';

import Cart from './components/Cart/Cart';
import Login from './components/SignUpIn/Login';
import UrlError from './components/UrlError/UrlError';
import CheckoutBtn from './components/FoodCorner/CheckoutBtn';

function App() {
    return (
        <div className="App">
            <AuthContextProvider value="Wasek Bellah" >
                <Header></Header>

                <Router>
                    <Switch>
                        <Route exact path="/">
                            <HomeHero></HomeHero>
                            <FoodCorner></FoodCorner>
                        </Route>
                        <Route exact path="/breakfast">
                            <HomeHero></HomeHero>
                            <FoodCorner></FoodCorner>
                        </Route>
                        <Route exact path="/dinner">
                            <HomeHero></HomeHero>
                            <FoodCorner></FoodCorner>
                        </Route>

                        <Route path="/login">
                            <Login></Login>
                        </Route>

                        <Route path="/cart">
                            <Cart></Cart>
                        </Route>

                        <Route path="/food/:foodKey">
                            <FoodDetails></FoodDetails>
                        </Route>

                        <Route path="*">
                            <UrlError></UrlError>
                        </Route>
                    </Switch>

                    <div className="foodCorner">
                        <Switch>
                            <Route exact path="/" component={Lunch} />
                            <Route exact path="/breakfast" component={Breakfast} />
                            <Route exact path="/dinner" component={Dinner} />
                        </Switch>
                    </div>

                    <Switch>
                        <Route exact path="/">
                            <CheckoutBtn></CheckoutBtn>
                        </Route>
                        <Route exact path="/breakfast">
                            <CheckoutBtn></CheckoutBtn>
                        </Route>
                        <Route exact path="/dinner">
                            <CheckoutBtn></CheckoutBtn>
                        </Route>
                    </Switch>
                </Router>
            </AuthContextProvider>
        </div>
    );
}

export default App;