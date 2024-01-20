import { Chart, registerables } from "chart.js";
import { useState } from "react";
import { Data } from "./Data";
import LineChart from "./LineChart";

Chart.register(...registerables);

export default function MyChart() {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
        {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.6)'
            ],
            borderColor: "black",
            borderWidth: 2
        }
        ]
    });
    return (
        <div className="MyChart">
            <p>Using Chart.js in React</p>
            <LineChart chartData={chartData}/>
        </div>
    )
}