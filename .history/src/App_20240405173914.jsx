import { useEffect, useState } from 'react'
import './App.css'
import Gallery from './components/Gallery/Gallery'
import axios from 'axios';
import Form from './components/Form/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/CharactersPage';

function App() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const { data } = await axios("http://localhost:3000/characters");
    setCharacters(data)
  }

  const postCharacter = async (newCharacter) => {
    await axios.post("http://localhost:3000/characters", newCharacter);
    getCharacters()
  }

  const deleteCharacter = async (idCharacter) => {
    await axios.delete("http://localhost:3000/characters/" + idCharacter);
    getCharacters()
  }


  useEffect(() => {
    getCharacters();
  }, [])

  return (
    <>

      <BrowserRouter>

      <Routes>
        <Route path={"/"} element={<HomePage/>}></Route>
        <Route path={"/characters"} element={<CharactersPage/>}></Route>
      </Routes>
      </BrowserRouter>

      <Gallery data={characters} onDelete={deleteCharacter} />

      <Form onSubmit={postCharacter} />
    </>
  )
}

export default App
