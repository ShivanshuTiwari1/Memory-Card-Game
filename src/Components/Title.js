import React from 'react'

function Title({ score, bestScore }) 
{
    return (
        <div id="title">
            <h1 id="name">Lé Memory Game</h1>
            <div id="scorecard">
                <h3 id="score">Score: {score}</h3>
                <h3 id="bestscore">Best Score: {bestScore}</h3>
            </div>
        </div>
    )
}

export default Title
