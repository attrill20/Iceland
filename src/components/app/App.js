import React from 'react';
import './App.css';
import Card from '../card';
import { foodData } from './foodData';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to our food allergy site!
        </p>
        {foodData.map((foodItem, index) => (
          <Card
            key={index}
            color="#f5f5f5"
            productName={foodItem.productName}
            allergen1={foodItem.allergen1}
            allergen2={foodItem.allergen2}
            allergen3={foodItem.allergen3}
            dietPref1={foodItem.dietPref1}
            image={foodItem.image}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
