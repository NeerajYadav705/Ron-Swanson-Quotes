import React from 'react';
import './SavedQuotes.css';

function SavedQuotes({ savedQuotes }) {
  return (
    <div className="saved-quotes">
      <h2>Saved Quotes</h2>
      <ul>
        {savedQuotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
}

export default SavedQuotes;
