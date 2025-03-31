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

const TokenizedCurrencyBarChart = () => {
  const data = {
    labels: ['CBDC', 'e-HKD', '穩定幣', '代幣化存款'],
    datasets: [
      {
        label: '不熟悉程度',
        data: [72, 65, 61, 81],
        backgroundColor: Array(4).fill('rgba(255, 182, 193, 0.8)'),
        borderColor: Array(4).fill('rgba(255, 182, 193, 1)'),
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
        align: 'end',
        color: 'rgba(255, 182, 193, 1)',
        font: {
          weight: 'bold',
          size: 14
        },
        formatter: (value) => `${value}%`,
        offset: 8
      }
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          display: true,
          drawTicks: false,
        },
        ticks: {
          stepSize: 20,
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
      <h2 className="chart-title">公眾對代幣化貨幣的認知程度</h2>
      <div className="chart-container">
        <div className="chart-wrapper">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TokenizedCurrencyBarChart; 