import { Route, Routes } from "react-router-dom";
import QuoteDetail from './QuoteDetail'
import NewQuotes from './NewQuotes'  
import AllQuotes from './AllQuotes'

const Quote  = () => {
  return (
    <Routes>
      <Route path='/' element={<AllQuotes/>}/>
      <Route path=":quoteID/*" element={<QuoteDetail/>}/>
      <Route path="new" element={<NewQuotes />}/>
    </Routes>
  )
}

export default Quote