import './Quotes.scss';
import quotesData from '../../data/quotes.json';

function Quotes() {
  const quotes = quotesData.quotes;
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  if (!selectedQuote) {
    return null;
  }

  const { quote, author } = selectedQuote;

  return (
    <div className="quote__container">
    <h2 className="quote__title" >ABOUT YOU</h2>
        <p className="quote">"{quote}"</p>
        <p>{author}</p>
    </div>
  );
}

export default Quotes;
