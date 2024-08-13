import React from 'react'

const Card = ({setTurnWord, turnWord, wordArrPool, count, setCount}) => {
    console.log(wordArrPool.length);
    
    const handleHover = () => {
        // Set the current word from the pool based on the current count
        setTurnWord(wordArrPool[count]);
    
        // Generate a new random number between 0 and wordArrPool.length - 1
        const randomNumber = Math.floor(Math.random() * wordArrPool.length);
    
        // Update the count with the new random number
        setCount(randomNumber);
    }
    
    
  return (
    <div onMouseEnter={handleHover} className={`p-2 absolute duration-500 ${turnWord.top} ${turnWord.left}`}>
        <div className='bg-blue-500 p-5 rounded-md cursor-pointer '>
            <p>{turnWord.text}</p>
        </div>
    </div>
  )
}

export default Card