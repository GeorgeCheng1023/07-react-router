
import {Route, Redirect, Switch} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes'
import NewQuotes from './pages/NewQuotes'
import QuoteDetail from './pages/QuoteDetail'
import NotFound from './pages/NotFound'
import Layout from './components/layout/Layout'
function App() {
  return (
    <Layout>
      <Switch>
      <Route path="/" exact>
        <Redirect to="/quote"/>
      </Route>

      <Route path="/quote" exact>
        <AllQuotes/>
      </Route>

      <Route path="/quote/:quoteID">
        <QuoteDetail/>
      </Route>

      <Route path="/new" exact >
        <NewQuotes/>
      </Route>

      <Route path="*">
        <NotFound/>
      </Route>
      </Switch>
    </Layout>
  );
}

export default App;
