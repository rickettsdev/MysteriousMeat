import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Index, Product, Error } from './Pages';

function App() {
  
  return (
     <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Index />}/>
      <Route path="/rooms/new" element={<Product />}/>
      <Route path="/404" element={<Error />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
