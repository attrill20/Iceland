import React from "react";
import "./styles.css";

function Card(props) {
  return (
    <div className="card" style={{ backgroundColor: props.color }}>
      <h5 className="card-title">{props.productName}</h5>
      <div className="card-body">
        <img className="card-img" src={props.image} alt="Product" />
        <div className="card-info">
          <div className="card-allergens">
            <p className="allergy">{props.allergen1} </p>
            <p className="allergy">{props.allergen2} </p>
            <p className="allergy">{props.allergen3} </p>
            <p className="allergy">{props.allergen4} </p>
          </div>
          <div className="card-dietPrefs">
            <p className="dietPref">{props.dietPref1}</p>
            <p className="dietPref">{props.dietPref2}</p>
            <p className="dietPref">{props.dietPref3}</p>
            <p className="dietPref">{props.dietPref4}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
