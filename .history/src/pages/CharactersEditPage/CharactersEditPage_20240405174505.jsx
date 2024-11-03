import React from 'react'

export default function CharactersEditPage() {
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
