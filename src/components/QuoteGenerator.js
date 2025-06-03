import React, { useState } from 'react';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://api.kanye.rest/');
      
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      
      const data = await response.json();
      setQuote(data.quote);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="quote-generator">
      <button 
        onClick={fetchQuote}
        disabled={isLoading}
      >
        {isLoading ? 'Getting Wisdom...' : 'Get Kanye Quote'}
      </button>
      
      {error && <p className="error">Error: {error}</p>}
      
      {quote && !isLoading && (
        <div className="quote-display">
          <p>"{quote}"</p>
          <p className="signature">- Kanye West</p>
        </div>
      )}
    </div>
  );
};

export default QuoteGenerator;