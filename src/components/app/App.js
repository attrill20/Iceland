import React from 'react';
import './App.css';
import Card from '../card';

function App() {


  async function fetchFood() {
    const response = await fetch('https://world.openfoodfacts.org?json=true&count=50'); // fetching a product by bar code
    const data = await response.json();
    console.log(data);
  }

  fetchFood();
  
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Welcome to our food allergy site!
        </p>
        <Card productName="Milkshake" allergen1="Dairy" allergen2="Egg" dietPref1="Vegetarian" image="https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card productName="Omlette" allergen1="Dairy" allergen2="Egg" dietPref1="Vegetarian" image="https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        
      </header>
    </div>
  );
}

export default App;
