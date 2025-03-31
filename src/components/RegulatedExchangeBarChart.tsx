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

const RegulatedExchangeBarChart = () => {
  const data = {
    labels: ['受監管交易所更安全', '未明確偏好或偏好無監管'],
    datasets: [
      {
        axis: 'y',
        label: '百分比',
        data: [20, 80],
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)', // Blue for regulated
          'rgba(201, 203, 207, 0.7)', // Gray for others
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(201, 203, 207, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.parsed.x}%`;
          }
        }
      },
      datalabels: {
        align: 'end' as const,
        anchor: 'end' as const,
        color: (context: any) => {
          const value = context.dataset.data[context.dataIndex];
          return value === 20 ? 'rgba(54, 162, 235, 1)' : '#666';
        },
        font: {
          weight: 'bold' as const,
          size: 14
        },
        formatter: (value: number) => `${value}%`
      }
    },
    scales: {
      x: {
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
      }
    }
  };

  return (
    <div>
      <h2 className="chart-title">監管對香港居民存款信心的影響</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RegulatedExchangeBarChart; 