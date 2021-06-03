import React from "react";
import { Pie, Chart } from "react-chartjs-2";

const MacroChart = ({ ...props }) => {
  // console.log("PROPS: ", props);

  const { carbs, fats, proteins, other, servingDetails } = props;

  // Macros:
  // 1. Protein
  // 2. Fats
  // 3. Carbs
  // 4. Water
  // 5. other
  const macroOther = (
    servingDetails.servingSize -
    carbs[0].quantity -
    proteins[0].quantity -
    fats[0].quantity -
    other[0].quantity
  ).toFixed(2);

  console.log("REST: ", macroOther);

  // Data set
  const data = (canvas) => {
    // console.log("CANVAS: ", canvas);
    // const ctx = canvas.getContext("2d");
    canvas.parentNode.style.height = "100%";
    canvas.parentNode.style.width = "100%";

    return {
      labels: ["Carbohydrates", "Protein", "Fat", "Water", "Other"],
      datasets: [
        {
          label: "%",
          data: [
            carbs[0].quantity,
            proteins[0].quantity,
            fats[0].quantity,
            other[0].quantity,
            macroOther,
          ],
          backgroundColor: [
            "#F51720",
            "#2FF3E0",
            "#F8D210",
            "#FA26A0",
            "#00A8A8",
          ],
          borderColor: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
          borderWidth: 1,
        },
      ],
    };
  };

  // Define options
  const options = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return (
            data.labels[tooltipItem.index] +
            ": " +
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] +
            "g"
          );
        },
      },
    },

    legend: {
      position: "right",
      display: true,
      labels: {
        color: "rgb(255, 99, 132)",
      },
    },

    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="macro-pie-chart">
      <div className="macro-chart-header">
        <span className="macro-chart-title">Macro Breakdown</span>
        {/* <br />
        <span style={{ fontSize: "75%" }}>
          (per {servingDetails.servingSize} {servingDetails.servingMeasure})
        </span> */}
      </div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default MacroChart;
