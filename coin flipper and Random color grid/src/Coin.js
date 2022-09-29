import React, { useState } from 'react'
import "./Coin.css";
import back from './back.jpg'
import front from './front.jpg'



function Coin(){
    const [heads, setHeads] = useState(0);
    const [tails, setTails] = useState(0);
    const [source, setSource] = useState(front);
    const totalHeads=heads;
    const totalTails=tails;
    function addTails(){
        setTails(tails + 1);
        setSource(front)
    }

        function addHeads(){
        setHeads(heads + 1);
        setSource(back)
    }

    function Roll(){
const roll = Math.floor(Math.random() * 2);
roll == 1 ? addHeads(): addTails()
    }


    return(
        <div>
        <img src={source}/>
            <div className='Random'></div>
            <button onClick={()=> Roll()}>Flip A Coin</button>
            <h3>{`You Have flippet coin ${totalHeads + totalTails} times and its been ${totalHeads} heads and ${totalTails} tails.`}</h3>
        </div>
    )
    
}

export default Coin


