import { useState } from 'react'
import './App.css'
import Card from './components/card'
import Container from './components/container'

function App() {


  return (
    <>
      <div className='w-full h-screen flex py-40 items-center flex-col gap-20'>
        <h1 className='font-bold text-3xl'>TEST</h1>
        <Container />
      </div>
    </>
  )
}

export default App
