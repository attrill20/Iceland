import React from "react";
import "./header.css";
import SearchBar from "./SearchBar/search";

function Header() {
  return (
    <div className="header">
      <div className="title">
        <h1> Food App </h1>
      </div>
      <div className="searchBar">
        <SearchBar />
      </div>
      <div className="legend"></div>
    </div>
  );
}

export default Header;
