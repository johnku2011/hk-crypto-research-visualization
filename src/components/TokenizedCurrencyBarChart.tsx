import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
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
    labels: ['中央銀行數位貨幣 (CBDC)', 'e-HKD', '穩定幣', '代幣化存款'],
    datasets: [
      {
        label: '不熟悉',
        data: [72, 65, 61, 81],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: '熟悉',
        data: [28, 35, 39, 19],
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value: any) {
            return value + '%';
          }
        },
        title: {
          display: true,
          text: '百分比'
        }
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y}%`;
          }
        }
      },
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold' as const,
          size: 12
        },
        formatter: (value: number) => `${value}%`
      }
    }
  };

  return (
    <div>
      <h2 className="chart-title">香港居民對代幣化貨幣的認知缺口</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TokenizedCurrencyBarChart; 