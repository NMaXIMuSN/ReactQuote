import React, { useEffect, useState } from 'react';
import { QuoteCard } from './components/QuoteCard/QuoteCard';
import QuoteService from './API/QuoteService';
import './style/App.css';
import { QuoteData } from './interfaces/Quote';
import { useFetching } from './hooks/useFetching';
import { Actions } from './components/Actions/Actions';

function App() {
	const [quotes, setQuotes] = useState<QuoteData[]>([]);
	const [quoteIndex, setQuoteIndex] = useState(-1);

  
	const [fetchQuote] = useFetching(async () => {
		const nextQuote = await QuoteService.fetchRandomQuote()
		const copyQuotes = [...quotes]
		copyQuotes.splice(quoteIndex + 1, 0, nextQuote)
		setQuotes(copyQuotes)
		setQuoteIndex(quoteIndex + 1)
  })

	const onPrev = () => {
		setQuoteIndex(Math.max(quoteIndex - 1, 0))
	}
	const onNext = () => {
		setQuoteIndex(Math.min(quoteIndex + 1, quotes.length - 1))
	}
	
	useEffect(() => {
		fetchQuote();
	}, []);

	return (
		<div className="App">
      {quotes.length
       ? <QuoteCard quote={quotes[quoteIndex]} />
       : ''
      }
      <Actions onPrev={onPrev} onRandom={fetchQuote} onNext={onNext}/>
		</div>
	);
}

export default App;
