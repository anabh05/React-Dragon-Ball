import React from 'react'

export default function CharactersPage() {
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
    <div>
      <Gallery data={characters} onDelete={deleteCharacter} />
    </div>
  )
}
