import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/home.jsx'
import About from './Components/About/about.jsx'
import Contact from './Components/Contact/contact.jsx'
import Products from './Components/Products/products.jsx'
import PrivacyPolicy from './Components/privacy/privacy.jsx'
import TermsAndConditions from './Components/Terms/terms.jsx'

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route  path="/" element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='privacypolicy' element={<PrivacyPolicy/>}/>
      <Route  path="/terms-condition" element={<TermsAndConditions/>}/>






    </Route>




)

)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
