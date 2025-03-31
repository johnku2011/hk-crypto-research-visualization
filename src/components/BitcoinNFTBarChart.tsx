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

const BitcoinNFTBarChart = () => {
  const data = {
    labels: ['比特幣', 'NFT'],
    datasets: [
      {
        label: '興趣變化',
        data: [7, -11],
        backgroundColor: [
          'rgba(142, 202, 206, 0.8)', // Light blue for positive
          'rgba(255, 182, 193, 0.8)', // Light pink for negative
        ],
        borderColor: [
          'rgba(142, 202, 206, 1)',
          'rgba(255, 182, 193, 1)',
        ],
        borderWidth: 1,
        barPercentage: 0.4,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options = {
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
        anchor: 'end' as const,
        align: function(context: any) {
          const value = context.dataset.data[context.dataIndex];
          return value > 0 ? 'top' : 'bottom';
        },
        color: function(context: any) {
          const value = context.dataset.data[context.dataIndex];
          return value > 0 ? 'rgba(142, 202, 206, 1)' : 'rgba(255, 182, 193, 1)';
        },
        font: {
          weight: 'bold' as const,
          size: function(context: any) {
            const width = context.chart.width;
            return width < 400 ? 11 : width < 600 ? 12 : 14;
          }
        },
        formatter: (value: number) => (value > 0 ? `+${value}%` : `${value}%`),
        offset: function(context: any) {
          const width = context.chart.width;
          return width < 400 ? 2 : width < 600 ? 4 : 8;
        }
      }
    },
    scales: {
      y: {
        min: -12,
        max: 8,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          drawBorder: false,
          drawTicks: false,
        },
        ticks: {
          stepSize: 2,
          padding: function(context: any) {
            const width = context.chart.width;
            return width < 400 ? 4 : width < 600 ? 6 : 10;
          },
          callback: function(value: any) {
            return value + '%';
          },
          font: {
            size: function(context: any) {
              const width = context.chart.width;
              return width < 400 ? 9 : width < 600 ? 10 : 12;
            }
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
          padding: function(context: any) {
            const width = context.chart.width;
            return width < 400 ? 2 : width < 600 ? 4 : 5;
          },
          font: {
            size: function(context: any) {
              const width = context.chart.width;
              return width < 400 ? 11 : width < 600 ? 12 : 14;
            }
          }
        }
      }
    },
    layout: {
      padding: function(context: any) {
        const width = context.chart.width;
        return {
          top: width < 400 ? 8 : width < 600 ? 10 : 15,
          left: width < 400 ? 2 : width < 600 ? 4 : 10,
          right: width < 400 ? 2 : width < 600 ? 4 : 10,
          bottom: 0
        };
      }
    }
  };

  return (
    <div>
      <h2 className="chart-title">香港居民對比特幣與NFT興趣的變化</h2>
      <div className="chart-container">
        <div className="chart-wrapper">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default BitcoinNFTBarChart; 