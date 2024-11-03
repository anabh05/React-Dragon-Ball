import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../../components/Form/Form';

export default function CharactersEditPage() {
  const navigate = useNavigate();
  const {id} = useParams();

  const putCharacter = async (newCharacter) => {
    await axios.put("http://localhost:3000/characters" , newCharacter);
    navigate("/characters")
  }

  const getCharacter = async () => {
    const { data } = await axios("http://localhost:3000/characters/" + );
  }
  
  useEffect(() => {
    getCharacter();
  }, [])

  return (
    <div>
      <Form onSubmit={putCharacter} />
    </div>
  )
}
