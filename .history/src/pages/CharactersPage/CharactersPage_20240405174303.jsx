import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Gallery from '../../components/Gallery/Gallery';
import { Link } from 'react-router-dom';

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const { data } = await axios("http://localhost:3000/characters");
    setCharacters(data)
  }

 

  const deleteCharacter = async (idCharacter) => {
    await axios.delete("http://localhost:3000/characters/" + idCharacter);
    getCharacters()
  }


  useEffect(() => {
    getCharacters();
  }, [])


  return (
    <div>
      <Gallery data={characters} onDelete={deleteCharacter} />

      <Link to="/characters/new">Crear nuevo personaje</Link>
    </div>
  )
}
