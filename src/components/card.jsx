import React from 'react'

const Card = ({setTurnWord, turnWord, wordArrPool, count, setCount, isStart, setIsStart}) => {
    console.log(wordArrPool.length);
    
    const handleHover = () => {
        // Set the current word from the pool based on the current count
        if (count === wordArrPool.length) {
            return
        } else {
            setTurnWord(wordArrPool[count]);
    
            setCount((prev) => prev + 1);
            setIsStart(true);
        }
        
    }

    const handleClick = () => {
        alert("I knew It")
    }
    
    
  return (
    <div onMouseEnter={handleHover} onClick={handleClick} className={`p-2 duration-500 ${isStart && "absolute"} ${turnWord.top} ${turnWord.left}`}>
        <div className='bg-blue-500 p-5 rounded-md cursor-pointer '>
            <p className='font-bold uppercase'>{turnWord.text}</p>
        </div>
    </div>
  )
}

export default Card