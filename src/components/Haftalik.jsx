import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const weeklyExpenseData = {
  labels: ["21.11", "22.11", "23.11", "24.11", "25.11", "26.11", "27.11"],
  datasets: [
    {
      label: "Kunlik xarajat (so‘m)",
      data: [26000, 14500, 27500, 103500, 285000, 31500, 15000],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 2,
    },
  ],
};



export default function Haftalik(){
    return <div className="w-full max-w-2xl mx-auto mt-12 shadow-sm">
      <Bar key={Math.random()} data={weeklyExpenseData} />
    </div>
}