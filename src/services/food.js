import axios from "axios";

const API_ID = process.env.REACT_APP_API_ID;
const API_SECRET = process.env.REACT_APP_API_SECRET;
const baseUrl = "https://api.edamam.com/api/food-database/v2/parser";

const source = axios.CancelToken.source();
// const source = CancelToken.source();

export const searchFood = async (input) => {
  //   Search for food
  console.log("ENV: ", input);
  let resp = await axios.get("", {
    cancelToken: source.token,
  });
  // Make axios request
};
