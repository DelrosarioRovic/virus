import React, {useState} from 'react'
import Card from './card'

const wordArrPool = [
    { text: "CLick mo", top: "top-[50%]", left: "left-[47%]" }, 
    { text: "CLick mo kaya", top: "top-[10%]", left: "left-[30%]" }, 
    { text: "DITO", top: "top-[70%]", left: "left-[10%]" }, 
    { text: "Ano BAYAN?", top: "top-[30%]", left: "left-[90%]" }, 
    { text: "BOBO?", top: "top-[40%]", left: "left-[70%]" },
    { text: "MALAPIT NA", top: "top-[30%]", left: "left-[40%]" },
    { text: "GO!", top: "top-[20%]", left: "left-[10%]" },
    { text: "Sige na!", top: "top-[80%]", left: "left-[15%]" },
    { text: "Pindot mo!", top: "top-[35%]", left: "left-[50%]" },
    { text: "Tuloy mo", top: "top-[25%]", left: "left-[25%]" },
    { text: "PUSH!", top: "top-[60%]", left: "left-[60%]" },
    { text: "Malapit na!", top: "top-[45%]", left: "left-[20%]" },
    { text: "Huwag!", top: "top-[15%]", left: "left-[80%]" },
    { text: "Dali na!", top: "top-[55%]", left: "left-[30%]" },
    { text: "Saan ka?", top: "top-[65%]", left: "left-[75%]" },
    { text: "Andito!", top: "top-[90%]", left: "left-[45%]" },
    { text: "Ayan!", top: "top-[50%]", left: "left-[10%]" },
    { text: "Diyan", top: "top-[35%]", left: "left-[70%]" },
    { text: "Bilis!", top: "top-[25%]", left: "left-[40%]" },
    { text: "Sobra na!", top: "top-[5%]", left: "left-[50%]" },
    { text: "Pa-Click", top: "top-[30%]", left: "left-[15%]" },
    { text: "Lapit pa", top: "top-[85%]", left: "left-[35%]" },
    { text: "Tama na!", top: "top-[70%]", left: "left-[55%]" },
    { text: "Wag dito", top: "top-[20%]", left: "left-[65%]" },
    { text: "Sa gilid", top: "top-[40%]", left: "left-[20%]" },
    { text: "Tama na", top: "top-[75%]", left: "left-[40%]" },
    { text: "Hanapin mo", top: "top-[90%]", left: "left-[80%]" },
    { text: "Sakto!", top: "top-[10%]", left: "left-[5%]" },
    { text: "Dito ba?", top: "top-[60%]", left: "left-[85%]" },
    { text: "Ayos na!", top: "top-[50%]", left: "left-[60%]" }
];


const Container = () => {
    const [turnWord, setTurnWord] = useState(wordArrPool[0]);
    const [count, setCount] = useState(1);
    
  return (
    <div className='w-full h-full absolute inset-0'>
        <Card 
            count={count}
            setCount={setCount}
            setTurnWord={setTurnWord} 
            turnWord={turnWord} 
            wordArrPool={wordArrPool}
        />
    </div>
  )
}

export default Container