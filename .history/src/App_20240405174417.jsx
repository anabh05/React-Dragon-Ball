import './App.css'
import Form from './components/Form/Form';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharactersNewPage from './pages/CharactersNewPage/CharactersNewPage';

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
          <Route path={"/characters/new"} element={<CharactersNewPage/>}></Route>
          <Route path={"/characters/:id"} element={<CharactersNewPage/>}></Route>
        </Routes>
      </BrowserRouter>

      

    </>
  )
}

export default App
