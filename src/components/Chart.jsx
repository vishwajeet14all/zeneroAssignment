import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Chart = ({ activeClients, inactiveClients }) => {
  const data = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        label: "Clients",
        data: [activeClients, inactiveClients],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  const options = {
    responsive: true, // Make chart responsive
    maintainAspectRatio: false, // Allow chart to scale
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ position: "relative", height: "400px", width: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
