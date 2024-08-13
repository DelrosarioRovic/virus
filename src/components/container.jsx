import React, {useState} from 'react'
import Card from './card'

const wordArrPool = [
    { text: "HINDI", top: "top-[50%]", left: "left-[47%]" }, 
    { text: "HINDI NGA", top: "top-[40%]", left: "right-[30%]" }, 
    { text: "HINDI NGA!!!", top: "top-[40%]", left: "right-[10%]" },
    { text: "HINDI NGA KULET", top: "top-[20%]", left: "right-[5%]" },
    { text: "SABI KO", top: "top-[35%]", left: "left-[25%]" },
    { text: "TAMA NA", top: "top-[15%]", left: "right-[45%]" },
    { text: "TAPOS NA", top: "top-[60%]", left: "left-[20%]" },
    { text: "SIGE NA", top: "top-[70%]", left: "right-[40%]" },
    { text: "PWEDE NA", top: "top-[10%]", left: "left-[35%]" },
    { text: "STOP NA", top: "top-[5%]", left: "right-[15%]" },
    { text: "TAPOS NA NGA", top: "top-[80%]", left: "left-[10%]" },
    { text: "KULET MO AH", top: "top-[85%]", left: "left-[20%]" },
    { text: "ETO", top: "top-[55%]", left: "right-[25%]" },
    { text: "ISA PANG", top: "top-[30%]", left: "left-[15%]" },
    { text: "OPTION", top: "top-[65%]", left: "right-[35%]" },
    { text: "MO", top: "top-[75%]", left: "left-[5%]" },
    { text: "OO NA", top: "top-[25%]", left: "right-[30%]" },
];




const Container = () => {
    const [turnWord, setTurnWord] = useState(wordArrPool[0]);
    const [count, setCount] = useState(1);
    const [isStart, setIsStart] = useState(false);
    
  return (
    <>
        <Card 
            isStart={isStart}
            setIsStart={setIsStart}
            count={count}
            setCount={setCount}
            setTurnWord={setTurnWord} 
            turnWord={turnWord} 
            wordArrPool={wordArrPool}
        />
    </>
  )
}

export default Container