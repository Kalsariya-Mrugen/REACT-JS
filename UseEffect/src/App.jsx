import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import LoggerComponent from './LoggerComponent'
import Timer from './Timer'
import Styler from './Styler'
import CountdownTimer from './CountdownTimer'
import Stopwatch from './Stopwatch'

function App() {
  
  return (<div>
      <LoggerComponent />
      <Timer/>
      <Styler/>
      <CountdownTimer/>
      <Stopwatch/>
    </div>
  )
}


export default App
