import axios from 'axios';
import React from 'react'

export default function CharactersNewPage() {

  const postCharacter = async (newCharacter) => {
    await axios.post("http://localhost:3000/characters", newCharacter);
    getCharacters()
  }


  return (
    <div>
      <Form onSubmit={postCharacter} />
    </div>
  )
}
