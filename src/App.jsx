import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div>
        <Header onMenuClick={handleMenuClick} />
        <Main currentPage={currentPage} />
        <Footer/>
      </div>
    </>
  );
};

export default App
