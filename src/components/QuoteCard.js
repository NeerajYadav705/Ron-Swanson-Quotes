import React from 'react';
import './QuoteCard.css';

function QuoteCard({ quote, fetchQuote, saveQuote }) {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <button onClick={fetchQuote}>New Quote</button>
      <button onClick={saveQuote}>Save Quote</button>
    </div>
  );
}

export default QuoteCard;
