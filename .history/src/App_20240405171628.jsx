import { useEffect } from 'react'
import './App.css'
import Gallery from './components/Gallery/Gallery'

function App() {

  const getCharacters = async() => {
    const {data} = axios("http://localhost:3000/characters");
  }

  useEffect(() => {
    getCharacters();
  },[])

  return (
    <>
      <Gallery/>
    </>
  )
}

export default App
