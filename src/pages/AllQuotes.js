import QuoteList from '../components/quotes/QuoteList'

const dummy_quotes = [
  {id: 'q1', author: 'John', text: 'This is insane!'},
  {id: 'q2', author: 'Mandy', text: 'Learning yourself'}
]

const AllQuotes = props => {
  return (
  <>
    <h1>AllQuotes</h1>
    <QuoteList quotes={dummy_quotes}/>
  </>
  )
}
export default AllQuotes
