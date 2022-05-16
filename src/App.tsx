import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import './App.css';
import { Index, Error } from './Pages';
import { Product } from './pages/ProductPage';

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Index />}/>
          <Route path="/products/:value" element={<Product />}/>
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
