import React from 'react';
import './App.css';
import { useState } from 'react';
import Header from '../Header/header.js';
import SearchBar from '../SearchBar/search.js';

function App() {

  const [food, setFood] = useState(null); // [state, function to update state

  async function fetchFood() {
    const response = await fetch(' https://world.openfoodfacts.org/api/v2/product/04963406.json'); // fetching a product by bar code
    const data = await response.json();
    console.log(data);
    setFood(data);
  }

  fetchFood();
  
  return (
    <div className="App">
        <Header setFood={setFood} food={food}/>
        
    </div>
  );
}

export default App;
