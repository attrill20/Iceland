import React, {useState} from 'react';
import './App.css';
import PrimarySearchAppBar from '../../components/Header/header.js'
import Card from '../card';
import { foodData } from './foodData';


function App() {
  const [userInput, setUserInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);


  return (
    <div className="App">
     <PrimarySearchAppBar setFilteredData={setFilteredData} setUserInput={setUserInput} />
        <p>
          Welcome to our food allergy site!
        </p>

      <header className="App-header">
        <p>
          Welcome to our food allergy site!
        </p>
        {filteredData.map((foodItem, index) => (
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
