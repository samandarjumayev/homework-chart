import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";


const polarAreaData = {
    labels: ['JavaScript', 'Python', 'Java', 'C++', 'Go'],
    datasets: [
        {
            label: 'Technology Usage Strength',
            data: [65, 59, 45, 30, 25], // kuch darajalari (foiz emas)
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',   // JavaScript
                'rgba(75, 192, 192, 0.7)',   // Python
                'rgba(255, 159, 64, 0.7)',   // Java
                'rgba(153, 102, 255, 0.7)',  // C++
                'rgba(255, 205, 86, 0.7)',   // Go
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 205, 86, 1)',
            ],
            borderWidth: 2,
        }
    ]
};


ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);

export default function Settings(){
    return <div className="w-full h-[calc(100vh-70px)] grid grid-cols-2 gap-10">
        <div className="">
            <PolarArea key={Math.random()} data={polarAreaData} />
        </div>
    </div>
}