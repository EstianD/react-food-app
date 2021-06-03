import React from "react";

const SearchItem = ({ item, handleItemSelect }) => {
  console.log("item: ", item);

  return (
    <div className="search-item" onClick={() => handleItemSelect(item)}>
      {item.label}
    </div>
  );
};

export default SearchItem;
