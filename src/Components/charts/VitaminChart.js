import React from "react";
import { Polar } from "react-chartjs-2";

const VitaminChart = ({ vitamins }) => {
  //   const [vitamins, setVitamins] = useState(vits);

  console.log("VITAMIN CHART: ", vitamins);

  console.log("VITAMINS: ", vitamins);

  // FIlter empty objects
  const vitaminArray = vitamins.filter((vitamin) => {
    return Object.keys(vitamin).length > 0;
  });

  console.log("ARRAY: ", vitaminArray);

  // Define chart and data arrays
  let chartData = [];
  let chartLabels = [];

  vitaminArray.forEach((vitamin) => {
    chartData.push(Math.round(vitamin.dv));
    chartLabels.push(vitamin.label);
  });

  console.log("CHART DATA: ", chartData);

  //   Data set
  const data = {
    labels: chartLabels,
    datasets: [
      {
        // label: "grams",
        data: chartData,
        backgroundColor: [
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
        ],
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
    <div className="vitamin-radar-chart">
      <div className="vitamin-chart-header">
        <span className="vitamin-chart-title">Vitamin daily needs</span>
      </div>
      <Polar data={data} options={options} width={350} height={350} />
    </div>
  );
};

export default VitaminChart;
