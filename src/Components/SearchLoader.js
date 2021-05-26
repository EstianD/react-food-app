import React from "react";

const SearchLoader = ({ loader }) => {
  const renderLoader = () => <div className="search-loader"></div>;

  return <div>{renderLoader()}</div>;
};

export default SearchLoader;
