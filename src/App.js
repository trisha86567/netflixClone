import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Navigation from './components/Navigation';
import Modal from './components/Modal';
import Browse from './pages/Browse';
import SearchResults from './pages/SearchResults';

function App() {
  return (
  <>
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path='/' element={<HomeScreen />}></Route>
        <Route path='/browse/:type' element={<Browse />}></Route>
        <Route path='/search' element={<SearchResults />}></Route>
      </Routes>
    </BrowserRouter>
    <Modal />
  </>
  );
}

export default App;
