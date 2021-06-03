import React, { useState } from "react";

import SearchItem from "./SearchItem";
import SearchLoader from "./SearchLoader";
import useFoodSearch from "../hooks/useFoodSearch";

const FoodSearch = ({ requests, setRequests, setFoodImages, foodImages }) => {
  const {
    searchResults,
    loading,
    searchValue,
    setSearchValue,
    showSearch,
    setShowSearch,
  } = useFoodSearch(setRequests);

  // Handle item select
  const handleItemSelect = (item) => {
    console.log("clicked: ", item);

    let requestsArr = [...requests.ingredients];
    let imgArr = [...foodImages];

    // Create request object for selected food
    let selectedObj = {
      foodId: item.foodId,
      quantity: item.quantity,
      measureURI: item.measureURI,
    };

    requestsArr.push(selectedObj);
    imgArr.push(item.image);
    //  Set input value to selected value
    //  setSearchValue(item.label);
    setSearchValue("");
    setShowSearch(false);
    setRequests({ ingredients: [...requestsArr] });
    setFoodImages([...imgArr]);
  };

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
