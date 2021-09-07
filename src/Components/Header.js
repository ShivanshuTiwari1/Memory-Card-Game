import React from "react";
import Title from "./Title";
import Description from "./Description";

function Header({ score, bestScore })
{
    
    return (
        <div id="header">
            <Title score = { score } bestScore = { bestScore }/>
            <Description />
        </div>
    );
}

export default Header
