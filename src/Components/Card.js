import React from 'react'
import './index.css'


function Card( { info, imageClicked }) {
    return (
        <div onClick={() => imageClicked(info.id) } className="card">
            <img  className="cardimg" src={info.source} alt="characters"/>
            <div>{info.name}</div>
        </div>
    )
}

export default Card
