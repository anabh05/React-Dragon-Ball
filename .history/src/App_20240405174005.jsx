import { useEffect, useState } from 'react'
import './App.css'
import Gallery from './components/Gallery/Gallery'
import axios from 'axios';
import Form from './components/Form/Form';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/CharactersPage';

function App() {
  
  return (
    <>

      <BrowserRouter>

        <header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/characters">Characters</NavLink>
        </header>

        <Routes>
          <Route path={"/"} element={<HomePage />}></Route>
          <Route path={"/characters"} element={<CharactersPage />}></Route>
        </Routes>
      </BrowserRouter>

      

      <Form onSubmit={postCharacter} />
    </>
  )
}

export default App
