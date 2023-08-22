// Search.js
import { BiSearch} from 'react-icons/bi';
import React, { useState } from "react";
import "./Search.css"; // Stil dosyasını dahil edin

const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`searchContainer ${isExpanded ? "expanded" : ""}`}>
      <div className="searchIcon" onClick={toggleSearch}>
        <BiSearch/>
      </div>
      <div className="searchContent">
        <input
          type="text"
          className="searchInput"
          placeholder="Search for anything"
        />
        <button type="submit" className="searchButton">
          <span className="buttonText">Search</span>
        </button>
      </div>
    </div>
  );
};

export default Search;
