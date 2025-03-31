import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

const CryptoInterestPieChart = () => {
  const data = {
    labels: ['計劃持有加密貨幣', '未計劃持有加密貨幣'],
    datasets: [
      {
        data: [25, 75],
        backgroundColor: [
          'rgba(142, 202, 206, 0.8)',
          'rgba(224, 224, 224, 0.8)',
        ],
        borderColor: [
          'rgba(142, 202, 206, 1)',
          'rgba(224, 224, 224, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            size: 12
          },
          padding: 20
        }
      },
      tooltip: {
        enabled: false
      },
      datalabels: {
        color: '#333',
        font: {
          weight: 'bold',
          size: 14
        },
        formatter: (value) => `${value}%`
      }
    }
  };

  return (
    <div>
      <h2 className="chart-title">香港成年人對加密貨幣的興趣 (2024年11月調查)</h2>
      <div className="chart-container">
        <div className="chart-wrapper">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default CryptoInterestPieChart; 