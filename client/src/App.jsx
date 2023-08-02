import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Crypto from "./pages/cypto"
import Header from './component/Header';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Crypto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
