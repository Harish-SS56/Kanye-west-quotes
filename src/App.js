import React from 'react';
import QuoteGenerator from './components/QuoteGenerator';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <img src="/kanye.jpg" alt="Kanye Logo" className="logo" />
      <h1>Kanye West Quotes</h1>
      <QuoteGenerator />
    </div>
  );
}

export default App;
