import {useParams,Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import NotFound from '../pages/NotFound'
import {Link} from 'react-router-dom'
const dummy_quotes = [
  {id: 'q1', author: 'John', text: 'This is insane!'},
  {id: 'q2', author: 'Mandy', text: 'Learning yourself'}
]

const QuoteDetail = props => {
  const params = useParams()
  const foundQuote = dummy_quotes.find(q => q.id === params.quoteID)

  return (
    <>
      <HighlightedQuote text={foundQuote.text} author={foundQuote.author}/>
      <Link className="btn" to='/quote'>Back to All Quote</Link>
      <Switch>
        <Route path={`/quote/${params.quoteID}/comments`} >
          <Comments/>
        </Route>      
      </Switch>
    </>
    )
  }
  export default QuoteDetail