import React from 'react'
import Card from "./Card"
import './index.css'



function Content({ cards, imageClicked }) {
    return (
        <div id="content">
            {cards.map(card => (<Card info={card} imageClicked={ imageClicked }/>))}
        </div>
    )
}

export default Content
