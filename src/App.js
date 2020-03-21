import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FoodCorner from './components/FoodCorner/FoodCorner';
import HomeHero from './components/HomeHero/HomeHero';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomeHero></HomeHero>
      <FoodCorner></FoodCorner>
    </div>
  );
}

export default App;