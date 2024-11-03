import axios from 'axios';
import React from 'react'
import Form from '../../components/Form/Form';

export default function CharactersNewPage() {

  const postCharacter = async (newCharacter) => {
    await axios.post("http://localhost:3000/characters", newCharacter);
  }


  return (
    <div>
      <Form onSubmit={postCharacter} />
    </div>
  )
}
