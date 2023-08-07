import React, { useState } from "react";

function SearchBar() {
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const dummyData = [
    {
      item: "Anas",
      Brand: "Nike",
      Age: 77,
    },
    {
      item: "Shervin",
      Brand: "Umbro",
      Age: 44,
    },
  ];

  function handleInput(event) {
    const input = event.target.value;
    setUserInput(input);

    // Filter the dummyData based on user input
    const filteredItems = dummyData.filter((data) =>
      data.item.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(filteredItems);
  }

  return (
    <div className="searchBar">
      <input
        value={userInput}
        onChange={handleInput}
        type="text"
        placeholder="Search for a product"
      />
      <button>Search</button>
      <ul>
        {filteredData.map((data, index) => (
          <li key={index}>
            {data.item} {data.Age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
