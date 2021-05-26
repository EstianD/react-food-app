import React, { useState } from "react";

import SearchItem from "./SearchItem";
import SearchLoader from "./SearchLoader";
import useFoodSearch from "../hooks/useFoodSearch";

const FoodSearch = () => {
  const {
    searchResults,
    loading,
    handleItemSelect,
    searchValue,
    setSearchValue,
    showSearch,
  } = useFoodSearch();

  //   Render search results
  const renderSearchResults = () => {
    return searchResults.map((item, i) => (
      <SearchItem key={i} item={item} handleItemSelect={handleItemSelect} />
    ));
  };

  return (
    <div className="search-div">
      <input
        className="food-search-input"
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder="Ingredient..."
      />

      {searchValue.length > 0 && showSearch && (
        <div className="search-results-container">
          {searchResults.length > 0 && <div>{renderSearchResults()}</div>}
          {loading && <SearchLoader loading={loading} />}
        </div>
      )}
    </div>
  );
};

export default FoodSearch;
