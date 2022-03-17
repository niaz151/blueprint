import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
  );
  
  export default function Chart(props) {
     return <Line data={props.data} />
  };
  
  export function formatChartData(labels, prices) {
    return {
      labels,
      datasets: [
        {
          data: prices,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ]
    }
  }


