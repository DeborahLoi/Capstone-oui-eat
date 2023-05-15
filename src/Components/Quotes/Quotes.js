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
  <div className="quote--display" >
   
  <h2 className="quote__title">QUOTE OF THE DAY</h2>
    <div className="quote__container">
       
        <p className="quote">"{quote}"</p>
        <p>{author}</p>
    </div>
    </div>
  );
}

export default Quotes;
