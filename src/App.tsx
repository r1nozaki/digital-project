import { Route, BrowserRouter as Router, Routes } from 'react-router';
import './App.css';
import Layout from './components/layout/layout';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={''} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
