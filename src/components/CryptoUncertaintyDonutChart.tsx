import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const CryptoUncertaintyDonutChart = () => {
  const data = {
    labels: ['不確定', '確定或未表態'],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: [
          'rgba(255, 159, 64, 0.8)', // Orange for uncertainty
          'rgba(201, 203, 207, 0.8)', // Gray for others
        ],
        borderColor: [
          'rgb(255, 159, 64)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%',
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
      }
      ,datalabels: {
        color: '#fff',
        font: {
          weight: 'bold' as const,
          size: 16
        },
        formatter: (value: number) => `${value}%`
      }      
    },
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
      <div className="donut-container">
        <Doughnut data={data} options={options} plugins={plugins} />
      </div>
    </div>
  );
};

export default CryptoUncertaintyDonutChart; 