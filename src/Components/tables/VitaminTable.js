import React from "react";

const VitaminTable = ({ vitamins, servingDetails }) => {
  console.log("VITAMINS: ", vitamins);

  return (
    <div>
      <h3>Vitamins</h3>
      <table>
        <tbody>
          <tr>
            <th>Nutrient</th>
            <th>Amount</th>
            <th>DV</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VitaminTable;
