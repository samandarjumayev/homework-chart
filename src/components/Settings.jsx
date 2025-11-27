import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement
} from "chart.js";
import { PolarArea, Radar } from "react-chartjs-2";


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

const radarData = {
    labels: ['JavaScript', 'Python', 'Java', 'C++', 'Go', 'Rust'],
    datasets: [
        {
            label: 'Backend Skill Level',
            data: [80, 90, 75, 60, 55, 50],
            backgroundColor: 'rgba(54, 162, 235, 0.3)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        },
        {
            label: 'Frontend Skill Level',
            data: [95, 60, 40, 30, 20, 15],
            backgroundColor: 'rgba(255, 99, 132, 0.3)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        }
    ]
};

ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend, 
    RadialLinearScale
);

export default function Settings(){
    return <div className="w-full h-[calc(100vh-70px)] grid grid-cols-2 gap-10">
        <div className="">
            <PolarArea key={Math.random()} data={polarAreaData} />
        </div>
        <div>
            <Radar key={Math.random()} data={radarData} />
        </div>
    </div>
}