
import './App.css'
import Button from './button'
import Mostra from './button'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Button className='acresc' valor = {+1} inicia = {count} muda = {setCount} />

    <div className="contador">
      {count}
      </div>
    
      <Button className='decresc 'valor = {-1} inicia = {count} muda = {setCount} />
    

    </>

  )
}


export default App
