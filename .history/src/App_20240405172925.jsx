import { useEffect, useState } from 'react'
import './App.css'
import Gallery from './components/Gallery/Gallery'
import axios from 'axios';
import Form from './components/Form/Form';

function App() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const { data } = await axios("http://localhost:3000/characters");
    setCharacters(data)
  }

  const postCharacter = async (newCharacter) => {
    debugger
    await axios.post("http://localhost:3000/characters", newCharacter);

  }

  useEffect(() => {
    getCharacters();
  }, [])

  return (
    <>
      <Gallery data={characters} />

      <Form onSubmit={postCharacter} />
    </>
  )
}

export default App
