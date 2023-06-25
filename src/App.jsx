import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Sobre from './components/pages/Sobre';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <Routes>
        <Route path="/CafecomJavascript" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;

