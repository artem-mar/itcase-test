import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Catalog from './pages/Catalog/Catalog'
import Product from './pages/Product/Product'

const App: FC = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  </>
);

export default App;
