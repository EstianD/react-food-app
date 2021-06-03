import React from "react";

const NutritionFacts = ({ foodArray, servingDetails }) => {
  //   const servingSize = foods[0].ingredients[0].parsed[0].quantity;
  //   const servingMeasure = foods[0].ingredients[0].parsed[0].measure[0];

  console.log("Nutritional: ", foodArray);
  console.log("SERVING: ", servingDetails);

  const { servingMeasure, servingSize } = servingDetails;

  // Destructure nutrients
  //   const { totalNutrients } = foods[0];
  //   const { totalDaily } = foods[0];
  //   console.log("NUTS: ", totalNutrients);

  //   const {
  //     CA = 0,
  //     CHOCDF = 0,
  //     CHOLE = 0,
  //     ENERC_KCAL = 0,
  //     FAMS = 0,
  //     FAPU = 0,
  //     FASAT = 0,
  //     FAT = 0,
  //     FE = 0,
  //     FIBTG = 0,
  //     FOLAC = 0,
  //     FOLDFE = 0,
  //     FOLDFD = 0,
  //     K = 0,
  //     MG = 0,
  //     NA = 0,
  //     NIA = 0,
  //     P = 0,
  //     PROCNT = 0,
  //     RIBF = 0,
  //     SUGAR = 0,
  //     THIA = 0,
  //     TOCPHA = 0,
  //     VITA_RAE = 0,
  //     VITB6A = 0,
  //     VITB12 = 0,
  //     VITC = 0,
  //     VITD = 0,
  //     VITK = 0,
  //     WATER = 0,
  //     ZN = 0,
  //   } = foods[0].totalNutrients;

  //   console.log("CA: ", CA);

  //   console.log("key", CHOLE);

  return (
    <div>
      <table className="nutrition-table">
        <tbody>
          <tr>
            <th className="nutrition-facts-heading">Nutrition Facts</th>
          </tr>
          <tr>
            <td
              colSpan="2"
              style={{ backgroundColor: "black", padding: 0, height: "5px" }}
            ></td>
          </tr>
          <tr className="serving-size-row">
            <td className="left-col">Serving Size</td>
            <td className="right-col">
              {servingSize}
              {servingMeasure}
            </td>
          </tr>
          <tr></tr>
          <tr className="left-col">
            <td>Amount per serving</td>
          </tr>
          <tr className="calorie-row">
            <td className="left-col">
              <b>Calories</b>
            </td>
            <td className="right-col">{foodArray.CAL}</td>
          </tr>
          <tr>
            <td
              colSpan="2"
              style={{ backgroundColor: "black", padding: 0, height: "2px" }}
            ></td>
          </tr>
          <tr>
            <td
              colSpan="2"
              className=""
              style={{ fontSize: "75%", textAlign: "right" }}
            >
              % Daily Value *
            </td>
          </tr>
          <tr>
            <td
              colSpan="2"
              style={{ backgroundColor: "black", padding: 0, height: "1px" }}
            ></td>
          </tr>
          {foodArray.FAT && (
            <>
              <tr>
                <td className="left-col">
                  <b>Total Fat</b>{" "}
                  <span className="total-nutrients-per-serving">
                    {foodArray.FAT.quantity.toFixed(1)}
                    {foodArray.FAT.unit}
                  </span>
                </td>
                <td className="rigth-col">{Math.round(foodArray.FAT.dv)}%</td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  style={{
                    backgroundColor: "black",
                    padding: 0,
                    height: "1px",
                  }}
                ></td>
              </tr>
            </>
          )}
          {foodArray.CHOLE && (
            <>
              <tr>
                <td className="left-col">
                  <b>Cholesterol</b>{" "}
                  <span className="total-nutrients-per-serving">
                    {foodArray.CHOLE.quantity.toFixed(1)}
                    {foodArray.CHOLE.unit}
                  </span>
                </td>
                <td className="rigth-col">{Math.round(foodArray.CHOLE.dv)}%</td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  style={{
                    backgroundColor: "black",
                    padding: 0,
                    height: "1px",
                  }}
                ></td>
              </tr>
            </>
          )}

          {foodArray.NA && (
            <>
              <tr>
                <td className="left-col">
                  <b>Sodium</b>{" "}
                  <span className="total-nutrients-per-serving">
                    {foodArray.NA.quantity.toFixed(1)}
                    {foodArray.NA.unit}
                  </span>
                </td>
                <td className="rigth-col">{Math.round(foodArray.NA.dv)}%</td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  style={{
                    backgroundColor: "black",
                    padding: 0,
                    height: "1px",
                  }}
                ></td>
              </tr>
            </>
          )}
          {foodArray.CHOCDF && (
            <>
              <tr>
                <td className="left-col">
                  <b>Total Carbohydrate</b>{" "}
                  <span className="total-nutrients-per-serving">
                    {foodArray.CHOCDF.quantity.toFixed(1)}
                    {foodArray.CHOCDF.unit}
                  </span>
                </td>
                <td className="rigth-col">
                  {Math.round(foodArray.CHOCDF.dv)}%
                </td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  style={{
                    backgroundColor: "black",
                    padding: 0,
                    height: "1px",
                  }}
                ></td>
              </tr>
            </>
          )}

          {foodArray.FIBTG && (
            <>
              <tr>
                <td className="left-col">
                  &nbsp;&nbsp;&nbsp;&nbsp;Dietery Fibre{" "}
                  <span className="total-nutrients-per-serving">
                    {foodArray.FIBTG.quantity.toFixed(1)}
                    {foodArray.FIBTG.unit}
                  </span>
                </td>
                <td className="rigth-col">{Math.round(foodArray.FIBTG.dv)}%</td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  style={{
                    backgroundColor: "black",
                    padding: 0,
                    height: "1px",
                  }}
                ></td>
              </tr>
            </>
          )}
          {foodArray.SUGAR && (
            <>
              <tr>
                <td className="left-col">
                  &nbsp;&nbsp;&nbsp;&nbsp;Sugar{" "}
                  <span className="total-nutrients-per-serving">
                    {foodArray.SUGAR.quantity.toFixed(1)}
                    {foodArray.SUGAR.unit}
                  </span>
                </td>
                <td className="rigth-col"></td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  style={{
                    backgroundColor: "black",
                    padding: 0,
                    height: "1px",
                  }}
                ></td>
              </tr>
            </>
          )}
          {foodArray.PROCNT && (
            <>
              <tr>
                <td className="left-col">
                  <b>Protein</b>{" "}
                  <span className="total-nutrients-per-serving">
                    {foodArray.PROCNT.quantity.toFixed(1)}
                    {foodArray.PROCNT.unit}
                  </span>
                </td>
                <td className="rigth-col">
                  {Math.round(foodArray.PROCNT.dv)}%
                </td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  style={{
                    backgroundColor: "black",
                    padding: 0,
                    height: "5px",
                  }}
                ></td>
              </tr>
            </>
          )}

          {foodArray.VITD && (
            <>
              <tr>
                <td className="left-col">
                  Vitamin D{" "}
                  <span className="total-nutrients-per-serving">
                    {foodArray.VITD.quantity.toFixed(1)}
                    {foodArray.VITD.unit}
                  </span>
                </td>
                <td className="rigth-col">{Math.round(foodArray.VITD.dv)}%</td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  style={{
                    backgroundColor: "black",
                    padding: 0,
                    height: "1px",
                  }}
                ></td>
              </tr>
            </>
          )}
          {foodArray.CA && (
            <>
              <tr>
                <td className="left-col">
                  Calcium{" "}
                  <span className="total-nutrients-per-serving">
                    {foodArray.CA.quantity.toFixed(1)}
                    {foodArray.CA.unit}
                  </span>
                </td>
                <td className="rigth-col">{Math.round(foodArray.CA.dv)}%</td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  style={{
                    backgroundColor: "black",
                    padding: 0,
                    height: "1px",
                  }}
                ></td>
              </tr>
            </>
          )}
          {foodArray.FE && (
            <>
              <tr>
                <td className="left-col">
                  Iron{" "}
                  <span className="total-nutrients-per-serving">
                    {foodArray.FE.quantity.toFixed(1)}
                    {foodArray.FE.unit}
                  </span>
                </td>
                <td className="rigth-col">{Math.round(foodArray.FE.dv)}%</td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  style={{
                    backgroundColor: "black",
                    padding: 0,
                    height: "1px",
                  }}
                ></td>
              </tr>
            </>
          )}
          {foodArray.K && (
            <>
              <tr>
                <td className="left-col">
                  Potassium{" "}
                  <span className="total-nutrients-per-serving">
                    {foodArray.K.quantity.toFixed(1)}
                    {foodArray.K.unit}
                  </span>
                </td>
                <td className="rigth-col">{Math.round(foodArray.K.dv)}%</td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  style={{
                    backgroundColor: "black",
                    padding: 0,
                    height: "1px",
                  }}
                ></td>
              </tr>
            </>
          )}

          <tr>
            <td className="nutrition-footer">
              * The % Daily Value (DV) tells you how much a nutrient in a
              serving of food contribute to a daily diet. 2,000 calories a day
              is used for general nutrition advice.
            </td>
          </tr>

          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default NutritionFacts;
