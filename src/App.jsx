import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginroutecomponent from './Components/routes/Loginroutecomponent/Loginroutecomponent'
import Signinroutecomponent from './Components/routes/Signinroutecomponent/Signinroutecomponent'



function App() {
  const [count, setCount] = useState(0)

  return (
    // <Loginroutecomponent/>
    <Signinroutecomponent/>
  
  )
}

export default App
