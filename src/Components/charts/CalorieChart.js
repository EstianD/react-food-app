import React from "react";
import { Pie } from "react-chartjs-2";

// Chart.defaults.plugins.tooltip.label = "asd";

const CalorieChart = ({ carbs, proteins, fats, servingDetails }) => {
  const PROTEIN_MULT = 4;
  const CARB_MULT = 4;
  const FAT_MULT = 9;

  // console.log("carbs: ", Number(carbs[0].quantity) * Number(2));

  let carbCalories = parseFloat(carbs[0].quantity * CARB_MULT);
  let protCalories = parseFloat(proteins[0].quantity) * PROTEIN_MULT;
  let fatCalories = parseFloat(fats[0].quantity) * FAT_MULT;

  let totalCalories = carbCalories + protCalories + fatCalories;

  let carbCaloriesPerc = ((carbCalories / totalCalories) * 100).toFixed(1);
  let protCaloriesPerc = ((protCalories / totalCalories) * 100).toFixed(1);
  let fatCaloriesPerc = ((fatCalories / totalCalories) * 100).toFixed(1);

  console.log("carbs: ", carbCalories);
  console.log("prot: ", protCalories);
  console.log("fat: ", fatCalories);

  // Data set
  const data = {
    labels: ["Carbohydrates", "Protein", "Fat"],
    datasets: [
      {
        label: "grams",
        data: [carbCaloriesPerc, protCaloriesPerc, fatCaloriesPerc],
        backgroundColor: ["#F51720", "#2FF3E0", "#F8D210"],
        borderColor: ["#ffffff", "#ffffff", "#ffffff"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return (
            data.labels[tooltipItem.index] +
            ": " +
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] +
            "%"
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
    <div className="calorie-pie-chart">
      <div className="calorie-chart-header">
        <span className="calorie-chart-title">Calorie Breakdown</span>
      </div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default CalorieChart;
