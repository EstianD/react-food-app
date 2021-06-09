import { useState, useEffect } from "react";
import axios from "axios";

// Define api variables
const API_ID = process.env.REACT_APP_APP_ID;
const API_SECRET = process.env.REACT_APP_API_SECRET;

const useFoodSearch = (setRequests) => {
  //   const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  //   Food query parameters
  const category = "generic-foods";
  const quantity = 100;
  const measureGramURI =
    "http://www.edamam.com/ontologies/edamam.owl#Measure_gram";

  useEffect(() => {
    const source = axios.CancelToken.source();
    // Show search results when user starts to type
    setShowSearch(true);
    //   Load search data async function
    const loadSearchData = async () => {
      //  Set loading true
      setLoading(true);
      // Clear search results on every request
      setSearchResults([]);
      try {
        const url = `https://api.edamam.com/api/food-database/v2/parser?ingr=${searchValue}&category=${category}&limit=10&app_id=${API_ID}&app_key=${API_SECRET}`;
        console.log("url: ", url);

        //   autocomplete url
        //   const auto = `http://api.edamam.com/auto-complete?q=${searchValue}&limit=10&category=${category}&app_id=${API_ID}&app_key=${API_SECRET}`;

        // Make get request and destructure data
        const { data } = await axios.get(url, { cancelToken: source.token });
        //   Check if data exists
        if (data) {
          // console.log("DATA: ", data);
          //  Destructure hints(recommendations) from data
          const { hints } = data;
          let foodArr = [];

          // Loop through items and create objects of them
          hints.map((item, i) => {
            // console.log("FOOD: ", item);

            if (i < 10) {
              let foodObj = {
                foodId: item.food.foodId,
                label: item.food.label,
                image: item.food.image,
                quantity: quantity,
                measureURI: measureGramURI,
              };
              //   Push objects to new array
              foodArr.push(foodObj);
            }
          });

          // console.log("FOOD ARRAY: ", foodArr);
          // Set search state to food array
          setSearchResults([...foodArr]);
          setLoading(false);
        }
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };
    //  Check if the search value is not empty
    if (searchValue) {
      loadSearchData();
    } else {
      setLoading(false);
      setSearchResults([]);
    }

    return () => {
      source.cancel("Component got unmounted!");
    };
  }, [searchValue]);

  return {
    searchResults,
    loading,
    searchValue,
    setSearchValue,
    showSearch,
    setShowSearch,
  };
};

export default useFoodSearch;
