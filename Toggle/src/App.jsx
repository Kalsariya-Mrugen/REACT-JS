import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleMessage from './ToggleMessage'
import UserAuthentication from './UserAuthentication'

function App() {
  return (<div>

    <ToggleMessage/>
    
    <UserAuthentication/>
    
    </div>
  )
}

export default App
