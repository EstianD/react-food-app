import React, { Fragment } from "react";

const VitaminTable = ({ vitamins, servingDetails }) => {
  console.log("VITAMINS: ", vitamins);

  return (
    <div>
      <h3>Vitamins</h3>
      <table className="vitamin-table">
        <tbody>
          <tr className="vitamin-table-header">
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
          {vitamins.map((vitamin, i) => {
            if (Object.keys(vitamin).length > 0) {
              return (
                <Fragment key={`${vitamin.label}-${i}-fragment`}>
                  <tr key={vitamin.label}>
                    <td key={`${vitamin.label}-${i}-nutrient`}>
                      <b>{vitamin.label}</b>
                    </td>
                    <td
                      key={`${vitamin.label}-${i}-quantity`}
                      style={{ fontSize: "75%" }}
                    >
                      {vitamin.quantity.toFixed(2)}
                      {vitamin.unit}
                    </td>
                    <td
                      key={`${vitamin.label}-${i}-dv`}
                      style={{ fontSize: "75%" }}
                    >
                      {Math.round(vitamin.dv)}%
                    </td>
                  </tr>
                  <tr key={i}>
                    <td
                      key={`${vitamin.label}-${i}-border`}
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

export default VitaminTable;
