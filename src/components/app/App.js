import React from 'react';
import './App.css';
import Card from '../card';
import { foodData } from './foodData';

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
        <Card color="#74B737" productName={foodData[1].productName} allergen1={foodData[1].allergen1} allergen2="Egg" dietPref1="Vegetarian" image={foodData[1].image} />
        <Card color="#74B737" productName="Omlette" allergen1="Dairy" allergen2="Egg" dietPref1="Vegetarian" image="https://media.istockphoto.com/id/1372112175/photo/omelet-frittata-homemade-omelet-isolated-on-dish-with-white-background.jpg?s=1024x1024&w=is&k=20&c=BQwCAU_BeSMn-QTKkUrsL6EN3rd4k6UezoIH8b4OK6A=" />
        <Card color="#F4EC70" productName="Burger" allergen1="Dairy" allergen2="Egg"  image="https://images.pexels.com/photos/1633577/pexels-photo-1633577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card color="#B85330" productName="Pizza" allergen1="Dairy" allergen2="Egg" allergen3="Nut" image="https://images.pexels.com/photos/1633577/pexels-photo-1633577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        
      </header>
    </div>
  );
}

export default App;
