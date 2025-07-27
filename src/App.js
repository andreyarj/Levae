import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ServicePage from './Pages/ServicePage';
import EnterprisePage from './Pages/EnterpriserPage';
import BudgetPage from './Pages/BudgetPage';
import CommercialChangePage from './Pages/CommercialChangePage';
import ResidentialChangePage from './Pages/ResidentialChangePage';
import FurnitureStoragePage from './Pages/FurnitureStoragePage';
import SupportPage from './Pages/SupportPage';

import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: true,
    });
  }, []);

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/Service' element={<ServicePage />}/>
        <Route path='/Enterprise' element={<EnterprisePage />}/>
        <Route path='/Budget' element={<BudgetPage />}/>
        <Route path='/Service/CommercialChangePage' element={<CommercialChangePage />}/>
        <Route path='/Service/ResidentialChange' element={<ResidentialChangePage />}/>
        <Route path='/Service/FurnitureStorage' element={<FurnitureStoragePage />}/>
        <Route path='/Service/Support' element={<SupportPage />} />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
