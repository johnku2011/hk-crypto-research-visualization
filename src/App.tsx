import BitcoinNFTBarChart from './components/BitcoinNFTBarChart';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="main-title">香港加密貨幣研究數據可視化</h1>
      <div className="charts-grid">
        <div className="chart-card">
          <BitcoinNFTBarChart />
        </div>
      </div>
    </div>
  );
}

export default App; 