import React from 'react';
import './App.css';
import PrimarySearchAppBar from '../../components/Header/header.js'

function App() {


  async function fetchFood() {
    const response = await fetch(' https://world.openfoodfacts.org/api/v2/product/04963406.json'); // fetching a product by bar code
    const data = await response.json();
    console.log(data);
  }

  fetchFood();
  
  return (
    <div className="App">
     
     <PrimarySearchAppBar/>
      
        <p>
          Welcome to our food allergy site!
        </p>
        
      
      
    </div>
  );
}

export default App;
