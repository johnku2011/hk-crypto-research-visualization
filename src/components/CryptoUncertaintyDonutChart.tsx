import { Doughnut } from 'react-chartjs-2';
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

const CryptoUncertaintyDonutChart = () => {
  const data = {
    labels: ['不確定', '確定或不考慮'],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: [
          'rgba(255, 206, 153, 0.8)',
          'rgba(224, 224, 224, 0.8)',
        ],
        borderColor: [
          'rgba(255, 206, 153, 1)',
          'rgba(224, 224, 224, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
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
    },
    cutout: '60%'
  };

  const plugins = [
    {
      id: 'centerText',
      beforeDraw: function(chart: any) {
        const width = chart.width;
        const height = chart.height;
        const ctx = chart.ctx;
        
        ctx.restore();
        const fontSize = (height / 300).toFixed(2);
        ctx.font = `bold ${fontSize}em sans-serif`;
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#FF9F40';
        
        const text = '40% 不確定';
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }
  ];

  return (
    <div>
      <h2 className="chart-title">香港成年人對持有加密貨幣的信心</h2>
      <div className="chart-container">
        <div className="chart-wrapper">
          <Doughnut data={data} options={options} plugins={plugins} />
        </div>
      </div>
    </div>
  );
};

export default CryptoUncertaintyDonutChart; 