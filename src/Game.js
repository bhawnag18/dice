import React, { useState } from "react";
import './Game.css';
const Game=()=>{
    const[heading,setHeading]=useState('Select Number');
    const[isStart,setIsStart]=useState(false);
    const[selectValue,setSelectedValue]=useState();
    const[randomValue,setRandomValue]=useState(1);
    const[score,setScore]=useState(0);
    const numbers=[1,2,3,4,5,6]
    const handleClick=()=>{
        setIsStart(true)
    }
    const handleValue=(value)=>{
        setSelectedValue(value);
        setHeading('Select Number')
        console.log(value);
    }
    const handleDiv=()=>{
        if(selectValue)
        {
        const a=Math.ceil(Math.random()*6);
        setRandomValue(a);
      
        console.log(a);
        if(randomValue===selectValue)
        {
            setScore((prev)=>prev+selectValue)
            setSelectedValue();
        }
        else{
            setScore((prev)=>prev-2)
            setSelectedValue();
        }
    }
    else
    {
        setHeading('Please Select Number')
    }
    }

const handleReset=()=>{
    setScore(0);
}
 return(
    <>
     {isStart?
     <div>
     <div className="inner_div">
        <h1 style={{color:(heading==='Select Number'?'black':'red')}}>{heading}</h1>
        {numbers.map((value)=>{
            return(
             <button className="btnValue" style={{color:'white', backgroundColor:(selectValue===value?'green':'black')}} onClick={()=>handleValue(value)}>{value}</button>
            )
        })}
        <div onClick={handleDiv}>
        
        <img src={`/dice${randomValue}.png`} alt='dice'/>
        <p>Click on dice to roll</p>
        <h2 style={{color:(score<=0?'red':'black')}}>{score}</h2>
        <h1>Total Score</h1>
        <button onClick={handleReset} className='resetBtn'><h4>Reset Score</h4></button>
        </div>
        

     </div>
     <div>
        <h3>Game Rules:-</h3>
        <ol>
            <li>Select any Number</li>
            <li>Click on dice image to roll it</li>
            <li>If Selected number is equal to obtained dice result then you will get same point of dice and if You are Wrong then Score will be deducted by 2 points</li>
        </ol>
     </div>
     </div>
     :
     <div className="main_div">
        <div className="left_div common_div">
            <img src='/dices.png' alt='dice'/>
        </div>
        <div className="right_div common_div">
            <div className="heading"><h1>The Dice Game</h1></div>
            <div><button onClick={handleClick} className="btn">Start Game</button></div>
        </div>
     </div>}
    </>
 )
}
export default Game;