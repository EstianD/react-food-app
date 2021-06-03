import { useState, useEffect } from "react";
import axios from "axios";

// Define api variables
const API_ID = process.env.REACT_APP_APP_ID;
const API_SECRET = process.env.REACT_APP_API_SECRET;
const getNutrientsUrl = `https://api.edamam.com/api/food-database/v2/nutrients?app_id=${API_ID}&app_key=${API_SECRET}`;

const useDashboard = () => {
  const [foods, setFoods] = useState([]);
  const [items, setItems] = useState(0);
  const [requests, setRequests] = useState({ ingredients: [] });
  const [foodImages, setFoodImages] = useState([]);

  useEffect(() => {
    console.log("RUNNING!!");
    //  console.log(state);
    let requestArr = [];

    // Define async function for post request
    async function sendRequest(requestObj) {
      try {
        const res = await axios.post(getNutrientsUrl, requestObj);
        console.log("RESPONSE: ", res);
        let foodDetailArr = [...foods];
        foodDetailArr.push(res.data);
        setFoods([...foodDetailArr]);
        setItems((prevItems) => prevItems + 1);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    }

    // Make requests for each food item
    requests.ingredients.map((item) => {
      // console.log("REQUEST: ", item);
      requestArr.push(item);
      let requestObj = {
        ingredients: [...requestArr],
      };
      console.log("REQUESTS: ", requestObj);

      // Make post request to API
      sendRequest(requestObj);
      // console.log("STATE: ", state);
    });
  }, [requests]);

  return {
    foods,
    setFoods,
    requests,
    setRequests,
    items,
    foodImages,
    setFoodImages,
  };
};

export default useDashboard;
