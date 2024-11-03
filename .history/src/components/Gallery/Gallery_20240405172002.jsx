import React from 'react'
import "./Gallery.scss"

export default function Gallery({data}) {

  return (
    <div>
        {data.map((item, index) => <div key={index}>
            <h2>{item.name}</h2>
            <img src={item.avatar} alt={item.name}/>
        </div>)}
    </div>
  )
}
