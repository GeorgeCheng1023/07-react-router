
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
      <Route path="/" element={<Navigate to="/quote"/>}/>
      <Route path="/quote" element={<AllQuotes />}/>
      <Route path="/quote/:quoteID/*" element={<QuoteDetail/>}/>
      <Route path="/new" element={<NewQuotes />}/>
      <Route path="*" element={<NotFound />}/>
      </Routes>
    </Layout>
  );
}

export default App;
