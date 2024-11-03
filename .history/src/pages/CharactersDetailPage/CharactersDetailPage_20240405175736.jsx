import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function CharactersDetailPage() {
    const { id } = useParams();

    const [character, setCharacter] = useState()


    const getCharacter = async () => {
        const { data } = await axios("http://localhost:3000/characters/" + id);
        setCharacter(data)
    }

    useEffect(() => {
        getCharacter();
    }, [])

    return (
        <div>
            {character && <div>

                <h2>{character.name}</h2>
                <img src={character.avatar} alt={character.name} />
                <p>{character.description}</p>
                <p>{character.idPlanet}</p>

                <div><Link to={"/characters/"+ id + "/edit"}>Edit</Link></div>

            </div>}
        </div>
    )
}
