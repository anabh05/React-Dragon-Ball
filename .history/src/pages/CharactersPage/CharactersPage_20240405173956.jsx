import React from 'react'

export default function CharactersPage() {
  return (
    <div>
      <Gallery data={characters} onDelete={deleteCharacter} />
    </div>
  )
}
