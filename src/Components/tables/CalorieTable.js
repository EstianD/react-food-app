import React from "react";

const CalorieTable = ({ fats, proteins, carbs }) => {
  console.log("FATS: ", fats);
  console.log("CARBS: ", carbs);
  console.log("PROT: ", proteins);

  const renderCarbsRows = () => {
    return carbs.map((carb, i) => {
      if (Object.keys(carb).length > 0) {
        console.log(i);

        if (i === 0) {
          return (
            <tr key={carb.label}>
              <td>Carbohydrates</td>
              <td>
                {carb.quantity}
                {carb.unit}
              </td>
              <td>{carb.dv !== 0 ? `${carb.dv.toFixed(1)}%` : ``}</td>
            </tr>
          );
        } else {
          return (
            <tr key={carb.label}>
              <td style={{ fontSize: "75%" }}>&nbsp;&nbsp;{carb.label}</td>
              <td>
                {carb.quantity}
                {carb.unit}
              </td>
              <td>{carb.dv !== 0 ? `${carb.dv.toFixed(1)}%` : ``}</td>
            </tr>
          );
        }
      }
    });
  };

  const renderProteinRows = () => (
    <tr>
      <td>{proteins[0].label}</td>
      <td>
        {proteins[0].quantity}
        {proteins[0].unit}
      </td>
      <td>{Math.round(proteins[0].dv)}%</td>
    </tr>
  );

  const renderFatsRows = () => {};

  return (
    <div>
      <table className="calorie-table">
        <tbody>
          <tr>
            <th>Nutrient</th>
            <th>Amount</th>
            <th>DV</th>
          </tr>
          {renderCarbsRows()}
          {renderProteinRows()}
        </tbody>
      </table>
    </div>
  );
};

export default CalorieTable;
