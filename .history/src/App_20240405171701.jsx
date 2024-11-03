import { useEffect, useState } from 'react'
import './App.css'
import Gallery from './components/Gallery/Gallery'

function App() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async() => {
    const {data} = axios("http://localhost:3000/characters");
    setCharacters(data)
  }

  useEffect(() => {
    getCharacters();
  },[])

  return (
    <>
      <Gallery data={characters}/>
    </>
  )
}

export default App
