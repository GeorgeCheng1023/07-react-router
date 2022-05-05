
import {Route, Navigate, Routes} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes'
import NewQuotes from './pages/NewQuotes'
import QuoteDetail from './pages/QuoteDetail'
import NotFound from './pages/NotFound'
import Layout from './components/layout/Layout'
function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" elements={<Navigate to="/quote"/>}/>
      <Route path="/quote" elements={<AllQuotes />}/>
      <Route path="/quote/:quoteID" elements={<QuoteDetail/>}/>
      <Route path="/new" elements={<NewQuotes />}/>
      <Route path="*" elements={<NotFound />}/>
      </Routes>
    </Layout>
  );
}

export default App;
