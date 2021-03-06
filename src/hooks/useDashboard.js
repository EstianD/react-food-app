import { useState, useEffect } from "react";
import axios from "axios";

// Define api variables
const API_ID = process.env.REACT_APP_APP_ID;
const API_SECRET = process.env.REACT_APP_API_SECRET;
const getNutrientsUrl = `https://api.edamam.com/api/food-database/v2/nutrients?app_id=${API_ID}&app_key=${API_SECRET}`;

const useDashboard = () => {
  const [foods, setFoods] = useState([]);
  const [requests, setRequests] = useState({ ingredients: [] });
  const [view, setView] = useState("single");

  // Compare button click handler
  const handleToggleCompareButtonClick = () => {
    // console.log("CHANGE VIEW");
    // If view === single, change to compare
    if (view === "single") {
      setView("compare");
    }
    // If view === compare, change to single
    if (view === "compare") {
      setView("single");
    }
  };

  useEffect(() => {
    // console.log("RUNNING!!");
    //  console.log(state);
    // let requestArr = [];
    let foodDetailArr = [];
    console.log("USEEFFECT");

    // Define async function for post request
    async function sendRequest(requestObj) {
      // console.log("REQUEST OBJECT: ", requestObj);

      try {
        const res = await axios.post(getNutrientsUrl, requestObj);
        console.log("RESPONSE: ", res);
        // debugger;

        // Check for view
        if (view === "single") {
          console.log("INSIDE SINGLE");
          foodDetailArr = [];

          foodDetailArr.push(res.data);
        }

        if (view === "compare") {
          console.log("INSIDE COMPARE");
          foodDetailArr.push(res.data);
          console.log("DIE ARRAY: ", foodDetailArr);
        }
        // console.log("FOOD DETAILS ARRAY: ", foodDetailArr);

        // Set foods result to state
        // console.log("FOOD ARRAY: ", foodDetailArr);

        setFoods([...foodDetailArr]);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    }

    console.log("ALL REQUESTS: ", requests);

    // Make requests for each food item
    requests.ingredients.map((item) => {
      // console.log("REQUEST HERE: ", item);
      // let requestArr = [];
      // requestArr.push(item);
      let requestObj = {
        ingredients: [item],
      };

      console.log("REQUEST.....: ", requestObj);

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
    view,
    setView,
    handleToggleCompareButtonClick,
  };
};

export default useDashboard;
