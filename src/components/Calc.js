import React, { useState } from 'react'
import '../Styles/Calc.css'


function Calc() {
    const [count,setCount] = useState('')
    const handleClick = (value)=>{
        setCount(count + value)
    }
    const calcResult=()=>{
        try{
            const result = eval(count)
            setCount(result)
        }
        catch(error){
            setCount('ERROR')

        }
    }
    const cleardisplay = ()=>{
        setCount("")
    }

  return (
    <div className='calc'>
        <div className='section'>
            <div className='display' id='display'>{count}</div>
            <div className='buttons'>
                <div className='row'>
                   <button onClick={()=>handleClick("1")} className='col'>1</button>
                   <button onClick={()=>handleClick("2")} className='col'>2</button>
                   <button onClick={()=>handleClick("3")} className='col'>3</button>
                   <button onClick={()=>handleClick("+")} className='col symbol'>+</button>
                </div>
                <div className='row'>
                <button onClick={()=>handleClick("4")} className='col'>4</button>
                <button onClick={()=>handleClick("5")} className='col'>5</button>
                <button onClick={()=>handleClick("6")} className='col'>6</button>
                <button onClick={()=>handleClick("-")} className='col symbol'>-</button>   
                </div>
                <div className='row'>
                <button onClick={()=>handleClick("7")} className='col'>7</button>
                <button onClick={()=>handleClick("8")} className='col'>8</button>
                <button onClick={()=>handleClick("9")} className='col'>9</button>
                <button onClick={()=>handleClick("*")} className='col symbol'>*</button>
                </div>
                <div className='row'>
                <button onClick={()=>handleClick(".")} className='col'>.</button>
                <button onClick={()=>handleClick("0")} className='col'>0</button>
                <button onClick={calcResult} className='col symbol'>=</button>
                <button onClick={()=>handleClick("/")} className='col symbol'>/</button>
                </div>
                <div className='row'>
                <button onClick={cleardisplay} className='col clear'>C</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calc