import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import { Route, BrowserRouter as Router, RouterProvider, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename='/alfreds-plumpco'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home/>}/>
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
