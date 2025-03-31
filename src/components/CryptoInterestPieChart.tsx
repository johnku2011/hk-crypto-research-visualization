import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const CryptoInterestPieChart = () => {
  const data = {
    labels: ['計劃持有加密貨幣', '未計劃持有加密貨幣'],
    datasets: [
      {
        data: [25, 75],
        backgroundColor: ['#3498db', '#e0e0e0'],
        borderColor: ['#2980b9', '#bdc3c7'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      },
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold' as const,
          size: 16
        },
        formatter: (value: number) => `${value}%`
      }
    },
  };

  return (
    <div>
      <h2 className="chart-title">香港成年人對加密貨幣的興趣（2024年11月調查）</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default CryptoInterestPieChart; 