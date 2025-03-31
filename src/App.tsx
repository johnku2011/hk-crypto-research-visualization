import React from 'react';
import CryptoInterestPieChart from './components/CryptoInterestPieChart';
import BitcoinNFTBarChart from './components/BitcoinNFTBarChart';
import CryptoUncertaintyDonutChart from './components/CryptoUncertaintyDonutChart';
import RegulatedExchangeBarChart from './components/RegulatedExchangeBarChart';
import TokenizedCurrencyBarChart from './components/TokenizedCurrencyBarChart';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="main-title">香港加密貨幣研究數據可視化</h1>
      
      <div className="charts-grid">
        <div className="chart-card">
          <CryptoInterestPieChart />
        </div>
        
        <div className="chart-card">
          <BitcoinNFTBarChart />
        </div>
        
        <div className="chart-card">
          <CryptoUncertaintyDonutChart />
        </div>
        
        <div className="chart-card">
          <RegulatedExchangeBarChart />
        </div>
        
        <div className="chart-card wide-card">
          <TokenizedCurrencyBarChart />
        </div>
      </div>
    </div>
  );
}

export default App; 