import { useState, useEffect } from 'react'
import List from './components/List'
import Form from './components/Form'

import { Dog } from './vite-env';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

const INI_STATE = [
  {
    name: 'quiso',
    age: 36,
    mood: "triste",
    weight: 411
  },
  {
    name: 'perri',
    age: 12,
    mood: "diavlo",
    weight: 458

  }
]
function App() {
  const [dogis, setDogis] = useState<Dog[]>([])
  useEffect(()=>{
    setDogis(INI_STATE);
  }, [])
  return (
  <div className="container">
    <h2>holaaa</h2>
    <List dogis={dogis}/>
    <Form/>
  </div>

  )
}

export default App
