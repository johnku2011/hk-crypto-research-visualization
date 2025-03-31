import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const RegulatedExchangeBarChart = () => {
  const data = {
    labels: ['受監管平台', '非受監管平台'],
    datasets: [
      {
        label: '使用意願',
        data: [20, 0],
        backgroundColor: [
          'rgba(142, 202, 206, 0.8)',
          'rgba(224, 224, 224, 0.8)',
        ],
        borderColor: [
          'rgba(142, 202, 206, 1)',
          'rgba(224, 224, 224, 1)',
        ],
        borderWidth: 1,
        barPercentage: 0.4,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: 'rgba(142, 202, 206, 1)',
        font: {
          weight: 'bold',
          size: 14
        },
        formatter: (value) => `+${value}%`,
        offset: 8
      }
    },
    scales: {
      y: {
        min: 0,
        max: 25,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          display: true,
          drawTicks: false,
        },
        ticks: {
          stepSize: 5,
          padding: 10,
          callback: (value) => `${value}%`,
          font: {
            size: 12
          }
        },
        border: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        },
        border: {
          display: false
        },
        ticks: {
          padding: 5,
          font: {
            size: 14
          }
        }
      }
    },
    layout: {
      padding: {
        top: 15,
        left: 10,
        right: 10,
        bottom: 0
      }
    }
  };

  return (
    <div>
      <h2 className="chart-title">受監管平台較非受監管平台更受歡迎</h2>
      <div className="chart-container">
        <div className="chart-wrapper">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default RegulatedExchangeBarChart; 