import { useState } from 'react'
import './App.css'
import Container from './components/container'

function App() {
  const handleClick = () => {
    alert("I knew it");
  }
  return (
    <>
      <div className='w-full h-screen flex py-40 items-center flex-col gap-20'>
        <h1 className='font-bold text-3xl'>KUPAL KABA BOSS?</h1>
        <div className='flex items-center'>
          <div className='p-2' onClick={handleClick}>
            <p className='bg-blue-500 rounded-md cursor-pointer p-5 font-bold uppercase'>
              oo
            </p>
          </div>
          <Container />
        </div>
      </div>
    </>
  )
}

export default App
