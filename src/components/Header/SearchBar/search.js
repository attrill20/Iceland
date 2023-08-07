import { useState } from "react";

function SearchBar() {
  const [userInput, setUserInput] = useState("");
  const [dummy, setDummy] = useState([]);

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
    setUserInput(event.target.value);
    if (dummy === dummyData.item) {
      setDummy(dummyData.item);
      console.log(dummy);
    }
  }

  return (
    <div className="searchBar">
      <input
        value={userInput}
        onChange={handleInput}
        type="text"
        placeholder="Search for a product"
      ></input>
      <button>Search</button>
      <p>{dummy}</p>
    </div>
  );
}

export default SearchBar;
