import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import SavedQuotes from './components/SavedQuotes';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  const saveQuote = () => {
    if (quote && !savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  };

  return (
    <div className="App">
      <h1>Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} fetchQuote={fetchQuote} saveQuote={saveQuote} />
      <SavedQuotes savedQuotes={savedQuotes} />
    </div>
  );
}

export default App;
