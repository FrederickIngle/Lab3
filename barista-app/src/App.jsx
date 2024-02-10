import { useState } from 'react'
import BaristaForm from './components/BaristaForm';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="title-container">
        <img src="https://quiet-macaron-ca013a.netlify.app/assets/omg-logo.79cdfddd.png" alt="coffee" className="coffee-icon"/>
        <h1 className='title'>On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      
    <BaristaForm></BaristaForm>

    </div>
  )
}

export default App
