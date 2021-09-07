import React, { useState } from "react"
import Header from "./Components/Header"
import Content from "./Components/Content"


import DoofusRick from "./images/DoofusRick.png"
import RickSanchez from "./images/RickSanchez.jpg"
import MortySmith from "./images/MortySmith.jpg"
import JerrySmith from "./images/JerrySmith.jpg"
import SummerSmith from "./images/SummerSmith.jpg"
import AdjudicatorRick from "./images/AdjudicatorRick.png"
import PickleRick from "./images/PickleRick.png"
import EyepatchRick from "./images/EyepatchRick.jpg"
import RiqIV from "./images/RiqIV.png"
import FarmerRick from "./images/FarmerRick.png"
import WaspRick from "./images/WaspRick.jpeg"
import HawaiianRick from "./images/HawaiianRick.png"










function App()
{
    const [score, setScore] = useState(0); //Initial score 0
    const [bestScore, setBestScore] = useState(0);
    
    const [cards, setCards] = useState([
        {
            id: 1,
            name: "Rick Sanchez",
            source: RickSanchez,
        },
        {
            id: 2,
            name: "Morty Smith",
            source: MortySmith,
        },
        {
            id: 3,
            name: "Jerry Smith",
            source: JerrySmith,
        },
        {
            id: 4,
            name: "Summer Smith",
            source: SummerSmith,
        },
        {
            id: 5,
            name: "Doofus Rick",
            source: DoofusRick,
        },
        {
            id: 6,
            name: "Adjudicator Rick",
            source: AdjudicatorRick,
        },
        {
            id: 7,
            name: "Pickle Rick",
            source: PickleRick,
        },
        {
            id: 8,
            name: "Eye Patch Rick",
            source: EyepatchRick,
        },
        {
            id: 9,
            name: "RiqIV",
            source: RiqIV,
        },
        {
            id: 10,
            name: "Farmer Rick",
            source: FarmerRick,
        },
        {
            id: 11,
            name: "Wasp Rick",
            source: WaspRick,
        },
        {
            id: 12,
            name: "Hawaiian Rick",
            source: HawaiianRick,
        },
    ]
    );
    const [selections, setSelections] = useState([]);
    
    
    
    function imageClicked(id1)
    {
        setCards(array => {
            let currentIndex = array.length,  randomIndex;
            
                // While there remain elements to shuffle...
                while (currentIndex !== 0) {
            
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
            
                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
                }
            
                return array;
        })
        if(selections.indexOf(id1) !== -1)  //You clicked twice, Game resets
        {
            if(score > bestScore)   //updating bestScore
            {
                setBestScore(score);
            }
            
            setScore(0);    //resetting score
            
            setSelections(retval => []);    //flushing selections
        }
        else
        {
            setSelections(prevItems => [...prevItems, id1]);
            setScore(retval => score+1);
        }
    }
    
    return(
        <div>
            <Header score={score} bestScore={bestScore}/>
            <hr/>
            <Content cards = { cards } imageClicked={ imageClicked }/>
        </div>
    );
}

export default App