import React, { useState, useEffect } from "react";
import axios from "axios";
import { searchFood } from "../services/food";

// Define api variables
const API_ID = process.env.REACT_APP_API_ID;
const API_SECRET = process.env.REACT_APP_API_SECRET;
const baseUrl = "https://api.edamam.com/api/food-database/v2/parser";
// 'https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=red%20apple&app_id={your app_id}&app_key={your app_key}'

const FoodSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const category = "generic-foods";

  useEffect(() => {
    const source = axios.CancelToken.source();
    //   Load search data async function
    const loadSearchData = async () => {
      try {
        const url = `https://api.edamam.com/api/food-database/v2/parser?ingr=${inputValue}&category=${category}&app_id=${API_ID}&app_key=${API_SECRET}`;
        console.log("url: ", url);

        const resp = await axios.get(url, { cancelToken: source.token });
        console.log("RESPONSE: ", resp);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };
    if (inputValue) {
      console.log("HERE");

      loadSearchData();
    }

    return () => {
      source.cancel("Component got unmounted!");
    };
  }, [inputValue]);

  return (
    <div>
      <input
        className="food-search-input"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </div>
  );
};

export default FoodSearch;
