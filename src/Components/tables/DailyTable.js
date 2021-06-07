import React, { Fragment } from "react";

const DailyTable = ({ nutrients, servingDetails, title }) => {
  console.log("dailyS: ", nutrients);

  return (
    <div>
      <h3>{title}</h3>
      <table className="daily-table">
        <tbody>
          <tr className="daily-table-header">
            <th>Nutrient</th>
            <th>Amount</th>
            <th>DV</th>
          </tr>
          <tr>
            <td
              colSpan="3"
              style={{ backgroundColor: "black", padding: 0, height: "2px" }}
            ></td>
          </tr>
          {nutrients.map((nutrient, i) => {
            if (Object.keys(nutrient).length > 0) {
              return (
                <Fragment key={`${nutrient.label}-${i}-fragment`}>
                  <tr key={nutrient.label}>
                    <td key={`${nutrient.label}-${i}-nutrient`}>
                      <b>{nutrient.label}</b>
                    </td>
                    <td
                      key={`${nutrient.label}-${i}-quantity`}
                      style={{ fontSize: "75%" }}
                    >
                      {nutrient.quantity.toFixed(2)}
                      {nutrient.unit}
                    </td>
                    <td
                      key={`${nutrient.label}-${i}-dv`}
                      style={{ fontSize: "75%" }}
                    >
                      {Math.round(nutrient.dv) !== 0
                        ? `${Math.round(nutrient.dv)}%`
                        : ""}
                    </td>
                  </tr>
                  <tr key={i}>
                    <td
                      key={`${nutrient.label}-${i}-border`}
                      colSpan="3"
                      style={{
                        backgroundColor: "black",
                        padding: 0,
                        height: "1px",
                      }}
                    ></td>
                  </tr>
                </Fragment>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DailyTable;
