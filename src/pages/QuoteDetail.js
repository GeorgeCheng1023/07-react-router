import {Link, Route, useParams, useRouteMatch} from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const dummy_quotes = [
  {id: 'q1', author: 'John', text: 'This is insane!'},
  {id: 'q2', author: 'Mandy', text: 'Learning yourself'}
]

const QuoteDetail = props => {
  const params = useParams()
  const match = useRouteMatch()
  const foundQuote = dummy_quotes.find(q => q.id === params.quoteID)
  
  return (
    <>
      <HighlightedQuote text={foundQuote.text} author={foundQuote.author}/>
      <Link className="btn" to='/quote'>Back to All Quote</Link>
      <Route path={match.path}>
        <div className='centered'>
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
        <Route path={`${match.path}/comments`} >
          <Comments/>
        </Route>      

    </>
    )
  }
  export default QuoteDetail