import React from 'react'
import { useNavigate } from 'react-router-dom';
import Form from '../../components/Form/Form';

export default function CharactersEditPage() {
  const navigate = useNavigate();

  const putCharacter = async (newCharacter) => {
    await axios.put("http://localhost:3000/characters" , newCharacter);
    navigate("/characters")
  }

  return (
    <div>
      <Form onSubmit={putCharacter} />
    </div>
  )
}
