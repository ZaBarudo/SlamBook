import { useState } from 'react'
import { BrowserROuter as Router, Route, Switch } from 'react-router-dom'
import Login from './authentication/login'
import Auth from './authentication/authentication'
import Home from './home/home'

const App = () => {


  return (
    <>
      <Auth />
    </>
    
  )
}

export default App;
