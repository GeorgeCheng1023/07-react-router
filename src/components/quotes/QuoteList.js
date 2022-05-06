import { Fragment } from 'react';

import {useNavigate, useLocation} from 'react-router-dom'

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const isDesending = queryParams.get('sort') === 'asc'

  const sortedQuotes = sortQuotes(props.quotes, isDesending)

  const changeSortHandler = () => {
    navigate(location.pathname + `?sort=${isDesending ? 'desc' : 'asc'}`)
    // history.push({
    //   path: location.pathname,
    //   search: `?sort=${isDesending ? 'desc' : 'asc'}`
    // })
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortHandler}>{isDesending ? 'Show Descending' : 'Show Ascending'}</button> 
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
