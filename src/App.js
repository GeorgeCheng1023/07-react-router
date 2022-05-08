
import {Route, Navigate, Routes} from 'react-router-dom';
import Quote from './pages/Quote/Quote'
import NotFound from './pages/NotFound'
import Layout from './components/layout/Layout'
function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<Navigate to="/quote"/>}/>
      <Route path="/quote/*" element={<Quote/>}/>
      <Route path="*" element={<NotFound />}/>
      </Routes>
    </Layout>
  );
}

export default App;
