import React from "react";
import { Polar } from "react-chartjs-2";

const DailyChart = ({ nutrients, title }) => {
  //   const [dailys, setdailys] = useState(vits);

  const colors = [
    "#F51720",
    "#fcba03",
    "#62fc03",
    "#03fceb",
    "#b0ab13",
    "#008026",
    "#e35d7f",
    "#c2ba1d",
    "#fff12b",
    "#008071",
    "#285666",
    "#9f66c4",
    "#5c0a0a",
    "#498223",
  ];

  if (title === "Minerals") {
    colors.reverse();
  }

  console.log("daily CHART: ", nutrients);

  console.log("dailyS: ", nutrients);

  // FIlter empty objects
  const foodsArray = nutrients.filter((food) => {
    return Object.keys(food).length > 0;
  });

  console.log("ARRAY: ", foodsArray);

  // Define chart and data arrays
  let chartData = [];
  let chartLabels = [];

  foodsArray.forEach((food) => {
    chartData.push(Math.round(food.dv));
    chartLabels.push(food.label);
  });

  console.log("CHART DATA: ", chartData);

  //   Data set
  const data = {
    labels: chartLabels,
    datasets: [
      {
        // label: "grams",
        data: chartData,
        backgroundColor: colors,
        borderColor: ["#ffffff"],
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
    <div className="daily-radar-chart">
      <div className="daily-chart-header">
        <span className="daily-chart-title">{title} daily needs</span>
      </div>
      <Polar data={data} options={options} width={350} height={350} />
    </div>
  );
};

export default DailyChart;
