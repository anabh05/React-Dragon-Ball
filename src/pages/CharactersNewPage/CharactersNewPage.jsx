import axios from 'axios';
import React from 'react'
import Form from '../../components/Form/Form';
import { useNavigate } from 'react-router-dom';

export default function CharactersNewPage() {
  const navigate = useNavigate();

  const postCharacter = async (newCharacter) => {
    await axios.post("http://localhost:3000/characters", newCharacter);
    navigate("/characters")
  }

  return (
    <div>
      <Form onSubmit={postCharacter} />
    </div>
  )
}
