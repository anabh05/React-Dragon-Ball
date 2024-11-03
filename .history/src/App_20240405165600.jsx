import { useEffect } from 'react'
import './App.css'
import Gallery from './components/Gallery/Gallery'

function App() {

  const getCharacters = async() => {

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
