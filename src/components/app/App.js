import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('https://us.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=breakfast_cereals&json=true', {
      'User-Agent': 'HealthyFoodChoices - Android - Version 1.0'
    })
      .then((response) => response.json())
      .then((data) => {
        setProductList(data.products);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        setProductList([]);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>API Test</h1>
      {productList.map((product) => (
        <div key={product.code} style={{ margin: '50px auto' }}>
          <h3>{product.product_name}</h3>
          <img src={product.image_front_small_url} alt="Product" />
          <div style={{ margin: '0 30%', fontSize: 12 }}>
            <p><strong>Allergens:</strong> {product.allergens}</p>
            <p><strong>Ingredients:</strong> {product.ingredients_text}</p>
          </div>
        </div>
      ))}
    </div>
  );

}

export default App;
