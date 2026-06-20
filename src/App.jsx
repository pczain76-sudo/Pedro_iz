import { useState } from 'react'

import './App.css'
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import { Outlet } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
function App() {
  

  return (
    <>


<Header/>
<Outlet/>
<Footer/>


      </>
  )
}

export default App
