import './App.css';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { HeaderSimple } from './components/Header/HeaderSimple';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import { Home } from './pages/Home/Home';
import { Search } from './pages/Search/Search';
import { Favourites } from './pages/Favourites/Favourites';

function App() {
  return (
    <MantineProvider>
      <HeaderSimple />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </MantineProvider>
  )
}

export default App