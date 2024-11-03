import React from 'react'
import "./Gallery.scss"
import { Link } from 'react-router-dom'

export default function Gallery({ data, onDelete }) {

    return (
        <div className='c-gallery'>
            {data.map((item, index) => <div key={index}>
                <h2>{item.name}</h2>
                <img src={item.avatar} alt={item.name} />
                <div><Link to={"/characters/"+ item.id}>Detalle</Link></div>
                <div><button onClick={() => onDelete(item.id)}>X</button></div>
            </div>)}
        </div>
    )
}
