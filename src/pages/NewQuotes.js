import QuoteForm from '../components/quotes/QuoteForm'
const NewQuotes = props => {
  const addQuoteHandler = event => {
    console.log('getadd')
  }
  return (
  <>
    <h1>Add New Quote</h1>
    <QuoteForm onAddQuote={addQuoteHandler}/>
  </>)
}
export default NewQuotes