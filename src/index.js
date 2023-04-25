import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Error from './pages/Error'
import Footer from './components/Footer';
import Location from './pages/Location';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='body'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='*' element={<Error />}/>
        <Route path='/Location/:id' element={<Location />}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);
