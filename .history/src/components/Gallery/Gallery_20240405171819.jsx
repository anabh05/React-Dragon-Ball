import React from 'react'

export default function Gallery({data}) {

  return (
    <div>
        {data.map((item, index) => <div>
            <h2>{item.name}</h2>
            <img src={item.avatar} alt={item.name}/>
        </div>)}
    </div>
  )
}
