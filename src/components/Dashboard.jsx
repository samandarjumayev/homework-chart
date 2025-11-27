import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: ["Yanvar", "Fevral", "Mart", "Aprel", "May"],
  datasets: [
    {
      label: "Kirim",
      data: [2500, 2100, 3000, 4000, 5300],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
    {
      label: "Chiqim",
      data: [3700, 2300, 2700, 3100, 3900],
      backgroundColor: "rgba(175, 92, 222, 0.5)",
    },
  ],
};

const lineData = {
  labels: ["Yanvar", "Fevral", "Mart", "Aprel", "May"],
  datasets: [
    {
      label: "Frontend",
      data: [20, 30, 40, 40, 55],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.3)",
      tension: 0.4,
    },
    {
      label: "Backend",
      data: [15, 34, 35, 28, 47],
      borderColor: "rgba(255, 159, 64, 1)",
      backgroundColor: "rgba(255, 159, 64, 0.3)",
      tension: 0.4,
    },
    {
      label: "Web Designer",
      data: [10, 20, 25, 34, 30],
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.3)",
      tension: 0.4,
    },
  ],
};



export default function Dashboard(){
    return <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-[calc(100vh-100px)] overflow-auto">
        <div className="">
            <Bar key={Math.random()} data={chartData} />
        </div>
        <div className="">
            <Line key={Math.random()} data={lineData} />
        </div>
    </div>
}