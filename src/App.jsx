import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'
import Loginroutecomponent from './Components/routes/Loginroutecomponent/Loginroutecomponent'
import Signinroutecomponent from './Components/routes/Signinroutecomponent/Signinroutecomponent'
import Navigationcomponent from './Components/routes/Navigationcomponent/Navigationcomponent'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>

    <div className='container'>
      <div >
          <Link to = {'/login'}>
               saveetha | mern
          </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to={'/login'}>LOGIN</Link>
          </li>
          <li>
            <Link to={'/signup'}>SIGNUP</Link>
          </li>
        </ul>
      </div>
    </div>
    
    
    <div>
      <div>
        <Routes>
          <Route exact path='/' element={<Loginroutecomponent/>}/>
          <Route exact path = '/login' element={<Loginroutecomponent/>}/>
          <Route exact path = '/signup' element={<Signinroutecomponent/>}/>
          <Route exact path = '/Navigate' element={<Navigationcomponent/>}/>
       </Routes>
      </div>
    </div>


    </Router>
    // <Loginroutecomponent/>
    // <Signinroutecomponent/>
    // <Navigationcomponent/>
  
  )
}

export default App
