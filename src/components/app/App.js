import React from 'react';
import './App.css';

function App() {


  async function fetchFood() {
    const response = await fetch(' https://world.openfoodfacts.org/api/v2/product/04963406.json'); // fetching a product by bar code
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
        
      </header>
    </div>
  );
}

export default App;
