import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Index, Product } from './Pages';

function App() {
  
  return (
     <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Index />}/>
      <Route path="/rooms/new" element={<Product />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
